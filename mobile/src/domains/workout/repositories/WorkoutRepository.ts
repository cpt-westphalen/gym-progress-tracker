import { Workout } from "../entities/Workout";

export abstract class WorkoutRepository {
	public abstract getAll(): Workout[];
	public abstract save(workout: Workout): void;
	public abstract remove(workout: Workout): void;
}
