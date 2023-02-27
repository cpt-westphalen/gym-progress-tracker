import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import { WorkoutSessionRepository } from "../../domains/habit-tracker/repositories/WorkoutSessionRepository";

export class InMemoryWorkoutSessionRepository
	implements WorkoutSessionRepository
{
	private db: WorkoutSession[];

	constructor(initialData?: WorkoutSession[]) {
		this.db = initialData ?? [];
	}

	public getAll(userId: string | undefined): WorkoutSession[] {
		const sortCallback = (a: WorkoutSession, b: WorkoutSession) =>
			a.date < b.date ? 0 : 1;

		if (userId)
			return this.db
				.filter((session) => session.userId == userId)
				.sort(sortCallback);

		return this.db.sort(sortCallback);
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
