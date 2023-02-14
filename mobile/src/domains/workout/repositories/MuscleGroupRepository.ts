import { MuscleGroup } from "../entities/MuscleGroup";

export abstract class MuscleGroupRepository {
	public abstract getAll(): MuscleGroup[];
	public abstract save(muscleGroup: MuscleGroup): void;
	public abstract remove(muscleGroup: MuscleGroup): void;
}
