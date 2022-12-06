const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

//To get all workouts.
router.get("/", getWorkouts);

//To get a single workout.
router.get("/:id", getWorkout);

//To post a new workout.
router.post("/", createWorkout);

//To delete a workout.
router.delete("/:id", deleteWorkout);

//To update a workout.
router.patch("/:id", updateWorkout);

module.exports = router;
