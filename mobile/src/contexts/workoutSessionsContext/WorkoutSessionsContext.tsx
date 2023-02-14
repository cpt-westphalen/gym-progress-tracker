import { createContext, useReducer } from "react";
import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import { ActionType, workoutSessionsReducer } from "./workoutSessionsReducer";

export type WorkoutSessionContextType = {
	workoutSessions: {
		currentYear: YearSessions;
		lastYear?: YearSessions;
	};
};

type YearSessions = MonthSessions[];

type MonthSessions = DaySession[] | null;

type DaySession = WorkoutSession | null;

export const initialWorkoutSessionContextValue: WorkoutSessionContextType = {
	workoutSessions: {
		currentYear: new Array(12).fill(null) as YearSessions,
	},
};

export const WorkoutSessionContext = createContext<WorkoutSessionContextType>(
	initialWorkoutSessionContextValue
);

export const WorkoutSessionsDispatch =
	createContext<React.Dispatch<ActionType> | null>(null);

export const WorkoutSessionsContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [workoutSessionsState, workoutSessionsDispatch] = useReducer(
		workoutSessionsReducer,
		initialWorkoutSessionContextValue
	);

	return (
		<WorkoutSessionsDispatch.Provider value={workoutSessionsDispatch}>
			<WorkoutSessionContext.Provider value={workoutSessionsState}>
				{children}
			</WorkoutSessionContext.Provider>
		</WorkoutSessionsDispatch.Provider>
	);
};
