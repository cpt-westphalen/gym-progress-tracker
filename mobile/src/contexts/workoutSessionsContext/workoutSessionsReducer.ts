import { Reducer } from "react";
import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import { WorkoutSessionContextType } from "./WorkoutSessionsContext";

export type ActionType = {
	type: "add_workoutSession" | "remove_workoutSession";
	payload: WorkoutSession | null;
};

export const workoutSessionsReducer: Reducer<
	WorkoutSessionContextType,
	ActionType
> = (prevState, action) => {
	const now = new Date();

	switch (action.type) {
		case "add_workoutSession":
			if (action.payload == null) return prevState;

			prevState.workoutSessions.currentYear[now.getMonth()][
				now.getDate()
			] = action.payload;

			// services/api.ts => saveSession(action.payload);

			return {
				...prevState,
			};

		case "remove_workoutSession":
			if (action.payload == null) return prevState;

			const sessionDate = action.payload.date;

			prevState.workoutSessions.currentYear[sessionDate.getMonth()][
				sessionDate.getDate()
			] = null;

			// services/api.ts => updateSession(action.payload);

			return {
				...prevState,
			};

		default:
			throw new Error("Reducer default case");
	}
};
