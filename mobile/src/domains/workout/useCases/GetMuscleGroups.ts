import { MuscleGroup } from "../entities/MuscleGroup";
import { MuscleGroupRepository } from "../repositories/MuscleGroupRepository";

export class GetMuscleGroups {
	constructor(private repo: MuscleGroupRepository) {}

	public exec(): MuscleGroup[] {
		const mgs = this.repo.getAll();
		return mgs;
	}
}
