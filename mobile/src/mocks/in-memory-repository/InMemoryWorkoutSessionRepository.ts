import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import { WorkoutSessionRepository } from "../../domains/habit-tracker/repositories/WorkoutSessionRepository";

export class InMemoryWorkoutSessionRepository
	implements WorkoutSessionRepository
{
	private db: WorkoutSession[];

	constructor(initialData: WorkoutSession[]) {
		this.db = initialData ?? [];
	}

	public getAll(userId: string | undefined): WorkoutSession[] {
		return this.db.sort((a, b) => (a.date < b.date ? 0 : 1));
	}
	public save(workoutSession: WorkoutSession): void {
		this.db.push(workoutSession);
	}
	public remove(workoutSession: WorkoutSession): void {
		this.db = this.db.filter(
			(w) =>
				w.date.getFullYear() == workoutSession.date.getFullYear() &&
				w.date.getMonth() == workoutSession.date.getMonth() &&
				w.date.getDate() == workoutSession.date.getDate()
		);
	}
}