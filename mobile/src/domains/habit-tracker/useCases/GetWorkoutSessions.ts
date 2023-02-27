import { WorkoutSession } from "../entities/WorkoutSession";
import { WorkoutSessionRepository } from "../repositories/WorkoutSessionRepository";

export class GetWorkoutSessions {
	constructor(private repo: WorkoutSessionRepository) {}

	public exec(userId?: string): WorkoutSession[] {
		return this.repo.getAll(userId);
	}
}
