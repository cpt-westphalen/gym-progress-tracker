import { Workout } from "../entities/Workout";
import { WorkoutRepository } from "../repositories/WorkoutRepository";

export class GetWorkouts {
	constructor(private repo: WorkoutRepository) {}

	public exec(): Workout[] {
		return this.repo.getAll();
	}
}
