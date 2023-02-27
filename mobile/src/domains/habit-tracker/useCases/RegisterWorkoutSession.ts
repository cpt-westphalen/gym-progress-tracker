import {
	WorkoutSession,
	WorkoutSessionProps,
} from "../entities/WorkoutSession";
import { WorkoutSessionRepository } from "../repositories/WorkoutSessionRepository";

export class RegisterWorkoutSession {
	constructor(private repo: WorkoutSessionRepository) {}

	public exec({ date, details, userId, workout }: WorkoutSessionProps): void {
		if (date == null || workout == null) {
			throw new Error("Date and Workout must be provided");
		}
		const workoutSession = new WorkoutSession({
			date,
			details,
			userId,
			workout,
		});
		this.repo.save(workoutSession);
	}
}
