import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import { WorkoutSessionRepository } from "../../domains/habit-tracker/repositories/WorkoutSessionRepository";
import { isSameDate } from "../../domains/habit-tracker/utils/isSameDate";

export class InMemoryWorkoutSessionRepository
	implements WorkoutSessionRepository
{
	private db: WorkoutSession[];

	constructor(initialData?: WorkoutSession[]) {
		this.db = initialData ?? [];
	}

	public getAll(userId?: string): WorkoutSession[] {
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
			(w) => !isSameDate(w.date, workoutSession.date)
		);
	}
}
