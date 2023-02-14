import { WorkoutSession } from "../entities/WorkoutSession";

export abstract class WorkoutSessionRepository {
	public abstract getAll(userId: string | undefined): WorkoutSession[];
	public abstract save(workoutSession: WorkoutSession): void;
	public abstract remove(workoutSession: WorkoutSession): void;
}
