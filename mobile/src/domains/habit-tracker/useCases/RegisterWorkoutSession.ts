import {
	WorkoutSession,
	WorkoutSessionProps,
} from "../entities/WorkoutSession";
import { WorkoutSessionRepository } from "../repositories/WorkoutSessionRepository";

export class RegisterWorkoutSession {
	constructor(private repo: WorkoutSessionRepository) {}

	public exec({ date, details, userId, workout }: WorkoutSessionProps): void {
		const workoutSession = new WorkoutSession({
			date,
			details,
			userId,
			workout,
		});
		this.repo.save(workoutSession);
	}
}
