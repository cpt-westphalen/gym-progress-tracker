import { Workout } from "../../domains/workout/entities/Workout";
import { WorkoutRepository } from "../../domains/workout/repositories/WorkoutRepository";

export class InMemoryWorkoutRepository implements WorkoutRepository {
	private db: Workout[];

	constructor(initialData?: Workout[]) {
		this.db = initialData ?? [];
	}

	public getAll(): Workout[] {
		return this.db;
	}
	public save(workout: Workout): void {
		this.db.push(workout);
	}
	public remove(workout: Workout): void {
		this.db.filter((w) => w.id !== workout.id);
	}
}
