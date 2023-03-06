import { Workout, WorkoutProps } from "../entities/Workout";
import { WorkoutRepository } from "../repositories/WorkoutRepository";
import uuid from "react-native-uuid";

export class CreateWorkout {
	constructor(private repo: WorkoutRepository) {}

	public exec({ id, muscleGroups, title }: WorkoutProps): Workout {
		if (!id) id = uuid.v4() as string;
		const workout = new Workout({ id, muscleGroups, title });
		this.repo.save(workout);
		return workout;
	}
}
