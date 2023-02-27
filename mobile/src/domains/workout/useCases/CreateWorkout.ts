import { Workout, WorkoutProps } from "../entities/Workout";
import { WorkoutRepository } from "../repositories/WorkoutRepository";
import { v4 as randomUUID } from "uuid";

export class CreateWorkout {
	constructor(private repo: WorkoutRepository) {}

	public exec({ id, muscleGroups, title }: WorkoutProps): Workout {
		if (!id) id = randomUUID();
		const workout = new Workout({ id, muscleGroups, title });
		this.repo.save(workout);
		return workout;
	}
}
