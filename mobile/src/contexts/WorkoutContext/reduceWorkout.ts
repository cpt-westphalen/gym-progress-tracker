import { repositories } from "../../api/db.module";
import { CreateMuscleGroup } from "../../domains/workout/useCases/CreateMuscleGroup";
import { CreateWorkout } from "../../domains/workout/useCases/CreateWorkout";
import { GetMuscleGroups } from "../../domains/workout/useCases/GetMuscleGroups";
import { GetWorkouts } from "../../domains/workout/useCases/GetWorkouts";
import { WorkoutContextType } from "./WorkoutContext";

export type ReduceWorkoutActionType = {
	type: string;
	payload: any;
};

type ReduceWorkoutType = (
	prevState: WorkoutContextType,
	action: ReduceWorkoutActionType
) => WorkoutContextType;

export const reduceWorkout: ReduceWorkoutType = (prevState, action) => {
	switch (action.type) {
		case "add_muscle_group":
			const createMuscleGroup = new CreateMuscleGroup(
				repositories.muscleGroups
			);
			createMuscleGroup.exec(action.payload);

			const getMuscleGroups = new GetMuscleGroups(
				repositories.muscleGroups
			);
			const muscleGroups = getMuscleGroups.exec();

			return { ...prevState, muscleGroups: [...muscleGroups] };
			break;
		case "add_workout":
			const createWorkout = new CreateWorkout(repositories.workouts);
			createWorkout.exec(action.payload);
			const getWorkouts = new GetWorkouts(repositories.workouts);
			const workouts = getWorkouts.exec();
			return { ...prevState, workouts: [...workouts] };
		default:
			return prevState;
			break;
	}
};
