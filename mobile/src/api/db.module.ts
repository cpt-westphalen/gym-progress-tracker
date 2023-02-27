import { InMemoryMuscleGroupRepository } from "../mocks/in-memory-repository/InMemoryMuscleGroupRepository";
import { InMemoryWorkoutRepository } from "../mocks/in-memory-repository/InMemoryWorkoutRepository";
import { InMemoryWorkoutSessionRepository } from "../mocks/in-memory-repository/InMemoryWorkoutSessionRepository";

export const repositories = {
	workouts: new InMemoryWorkoutRepository(),
	workoutSessions: new InMemoryWorkoutSessionRepository(),
	muscleGroups: new InMemoryMuscleGroupRepository(),
};
