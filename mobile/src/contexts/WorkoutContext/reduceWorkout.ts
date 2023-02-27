import { repositories } from "../../api/db.module";
import { MuscleGroupProps } from "../../domains/workout/entities/MuscleGroup";
import { Workout } from "../../domains/workout/entities/Workout";
import { CreateMuscleGroup } from "../../domains/workout/useCases/CreateMuscleGroup";
import { CreateWorkout } from "../../domains/workout/useCases/CreateWorkout";
import { GetMuscleGroups } from "../../domains/workout/useCases/GetMuscleGroups";
import { GetWorkouts } from "../../domains/workout/useCases/GetWorkouts";
import { WorkoutContextType } from "./WorkoutContext";

export type ReduceWorkoutActionType = {
	type: "add_muscle_group" | "add_workout" | "fetch_workout_data";
	payload: MuscleGroupProps | Workout | null;
};

type ReduceWorkoutType = (
	prevState: WorkoutContextType,
	action: ReduceWorkoutActionType
) => WorkoutContextType;

export const reduceWorkout: ReduceWorkoutType = (prevState, action) => {
	switch (action.type) {
		case "add_muscle_group": {
			if (action.payload == null || action.payload instanceof Workout)
				return prevState;

			const createMuscleGroup = new CreateMuscleGroup(
				repositories.muscleGroups
			);
			createMuscleGroup.exec(action.payload);

			const getMuscleGroups = new GetMuscleGroups(
				repositories.muscleGroups
			);
			const muscleGroups = getMuscleGroups.exec();

			return { ...prevState, muscleGroups: [...muscleGroups] };
		}
		case "add_workout": {
			if (!(action.payload instanceof Workout) || action.payload == null)
				return prevState;
			const createWorkout = new CreateWorkout(repositories.workouts);
			createWorkout.exec(action.payload);
			const getWorkouts = new GetWorkouts(repositories.workouts);
			const workouts = getWorkouts.exec();
			return { ...prevState, workouts: [...workouts] };
		}
		case "fetch_workout_data":
			const getWorkouts = new GetWorkouts(repositories.workouts);
			const workouts = getWorkouts.exec();
			const getMuscleGroups = new GetMuscleGroups(
				repositories.muscleGroups
			);
			const muscleGroups = getMuscleGroups.exec();
			return {
				...prevState,
				workouts: [...workouts],
				muscleGroups: [...muscleGroups],
			};
		default:
			return prevState;
			break;
	}
};
