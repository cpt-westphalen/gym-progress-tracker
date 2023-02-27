import { Reducer } from "react";

import { repositories } from "../../api/db.module";

import { RegisterWorkoutSession } from "../../domains/habit-tracker/useCases/RegisterWorkoutSession";
import { GetWorkoutSessions } from "../../domains/habit-tracker/useCases/GetWorkoutSessions";

import { WorkoutSessionProps } from "../../domains/habit-tracker/entities/WorkoutSession";

import { WorkoutSessionContextType } from "./WorkoutSessionsContext";

export type WorkoutSessionsActionType = {
	type:
		| "add_workout_session"
		| "remove_workout_session"
		| "fetch_workout_sessions";
	payload: WorkoutSessionProps | null;
};

export const workoutSessionsReducer: Reducer<
	WorkoutSessionContextType,
	WorkoutSessionsActionType
> = (prevState, action) => {
	switch (action.type) {
		case "fetch_workout_sessions": {
			const getWorkoutSessions = new GetWorkoutSessions(
				repositories.workoutSessions
			);
			const workoutSessions = getWorkoutSessions.exec();
			return { ...prevState, workoutSessions };
		}

		case "add_workout_session": {
			if (action.payload == null) return prevState;

			const { date, details, userId, workout } = action.payload;

			const registerWorkoutSession = new RegisterWorkoutSession(
				repositories.workoutSessions
			);

			registerWorkoutSession.exec({ date, details, userId, workout });

			const getWorkoutSessions = new GetWorkoutSessions(
				repositories.workoutSessions
			);

			const workoutSessions = getWorkoutSessions.exec();

			return {
				...prevState,
				workoutSessions: [...workoutSessions],
			};
		}

		case "remove_workout_session": {
			// TODO: removeWorkoutSession use-case
		}
		default:
			throw new Error("Reducer default case");
	}
};
