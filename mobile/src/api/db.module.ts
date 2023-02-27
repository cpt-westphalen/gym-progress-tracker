import { arms, back, chest, legs, shoulders } from "../mocks/data/muscleGroups";
import { workoutA, workoutB } from "../mocks/data/workouts";
import { InMemoryMuscleGroupRepository } from "../mocks/in-memory-repository/InMemoryMuscleGroupRepository";
import { InMemoryWorkoutRepository } from "../mocks/in-memory-repository/InMemoryWorkoutRepository";
import { InMemoryWorkoutSessionRepository } from "../mocks/in-memory-repository/InMemoryWorkoutSessionRepository";

export const repositories = {
	workouts: new InMemoryWorkoutRepository([workoutA, workoutB]),
	workoutSessions: new InMemoryWorkoutSessionRepository(),
	muscleGroups: new InMemoryMuscleGroupRepository([
		chest,
		back,
		arms,
		legs,
		shoulders,
	]),
};
