import { MuscleGroup, MuscleGroupProps } from "../entities/MuscleGroup";
import { MuscleGroupRepository } from "../repositories/MuscleGroupRepository";

export class CreateMuscleGroup {
	constructor(private repo: MuscleGroupRepository) {}

	public exec({ icon, name }: MuscleGroupProps): MuscleGroup {
		if (name.length < 3)
			throw new Error("Name must contain at least 3 letters");
		const muscleGroup = new MuscleGroup({ icon, name });
		this.repo.save(muscleGroup);
		return muscleGroup;
	}
}
