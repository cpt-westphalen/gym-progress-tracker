import { WorkoutSession } from "../entities/WorkoutSession";

export const workoutSessionIsFromSameMonth = (date: Date) => {
	return (session: WorkoutSession) => {
		return (
			session.date.getFullYear() === date.getFullYear() &&
			session.date.getMonth() === date.getMonth()
		);
	};
};
