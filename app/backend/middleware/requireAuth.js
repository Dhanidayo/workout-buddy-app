const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //verify authorization
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }
  //grab token from the authorization field in the header
  const token = authorization.split(" ")[1];

  try {
    //verify token
    const { _id } = jwt.verify(token, process.env.SECRET);

    //find user in the db with the id and assign it to a property in the req object. In this case, req.user.
    //NB: The property could be named anything. It will be attached to the req body of the next function called by the authenticated user.
    req.user = await User.findOne({ _id }).select("_id");
    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
