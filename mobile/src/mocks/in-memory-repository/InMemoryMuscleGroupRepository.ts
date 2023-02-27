import { MuscleGroup } from "../../domains/workout/entities/MuscleGroup";
import { MuscleGroupRepository } from "../../domains/workout/repositories/MuscleGroupRepository";

export class InMemoryMuscleGroupRepository implements MuscleGroupRepository {
	private db: MuscleGroup[];

	constructor(initialData?: MuscleGroup[]) {
		this.db = initialData ?? [];
	}

	public getAll(): MuscleGroup[] {
		return this.db;
	}
	public save(muscleGroup: MuscleGroup): void {
		this.db.push(muscleGroup);
	}
	public remove(muscleGroup: MuscleGroup): void {
		this.db = this.db.filter((m) => m.name != muscleGroup.name);
	}
}
