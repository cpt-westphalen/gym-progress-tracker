import { createContext, useEffect, useReducer } from "react";
import { Workout } from "../../domains/workout/entities/Workout";
import { MuscleGroup } from "../../domains/workout/entities/MuscleGroup";
import { ReduceWorkoutActionType, reduceWorkout } from "./reduceWorkout";

export type WorkoutContextType = {
	workouts: Workout[];
	muscleGroups: MuscleGroup[];
};

const initialWorkoutContext: WorkoutContextType = {
	workouts: [],
	muscleGroups: [],
};

export const WorkoutContext = createContext<WorkoutContextType>(
	initialWorkoutContext
);

export const WorkoutDispatch =
	createContext<React.Dispatch<ReduceWorkoutActionType> | null>(null);

export const WorkoutContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [workoutState, workoutDispatch] = useReducer(
		reduceWorkout,
		initialWorkoutContext
	);

	useEffect(() => {
		workoutDispatch({ type: "fetch_workout_data", payload: null });
	}, []);

	return (
		<WorkoutDispatch.Provider value={workoutDispatch}>
			<WorkoutContext.Provider value={workoutState}>
				{children}
			</WorkoutContext.Provider>
		</WorkoutDispatch.Provider>
	);
};
