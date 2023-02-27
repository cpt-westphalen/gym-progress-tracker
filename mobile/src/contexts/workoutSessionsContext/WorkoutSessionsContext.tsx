import { createContext, useReducer } from "react";
import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import {
	WorkoutSessionsActionType,
	workoutSessionsReducer,
} from "./reduceWorkoutSessions";

export type WorkoutSessionContextType = {
	workoutSessions: WorkoutSession[];
};

export const initialWorkoutSessionContext: WorkoutSessionContextType = {
	workoutSessions: [],
};

export const WorkoutSessionContext = createContext<WorkoutSessionContextType>(
	initialWorkoutSessionContext
);

export const WorkoutSessionsDispatch =
	createContext<React.Dispatch<WorkoutSessionsActionType> | null>(null);

export const WorkoutSessionsContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [workoutSessionsState, workoutSessionsDispatch] = useReducer(
		workoutSessionsReducer,
		initialWorkoutSessionContext
	);

	return (
		<WorkoutSessionsDispatch.Provider value={workoutSessionsDispatch}>
			<WorkoutSessionContext.Provider value={workoutSessionsState}>
				{children}
			</WorkoutSessionContext.Provider>
		</WorkoutSessionsDispatch.Provider>
	);
};
