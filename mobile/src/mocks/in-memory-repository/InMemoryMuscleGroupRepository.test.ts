import { MuscleGroup } from "../../domains/workout/entities/MuscleGroup";
import { InMemoryMuscleGroupRepository } from "./InMemoryMuscleGroupRepository";

describe("In-Memo Muscle Group Repository", () => {
	let m: MuscleGroup, m2: MuscleGroup;
	beforeAll(() => {
		m = new MuscleGroup({ icon: "#", name: "Test" });
		m2 = new MuscleGroup({ icon: "#", name: "Test2" });
	});

	it("should start with provided initial muscle groups", () => {
		let mgs;

		expect.assertions(3);

		expect(
			() => (mgs = new InMemoryMuscleGroupRepository([m, m2]))
		).not.toThrow();

		mgs = new InMemoryMuscleGroupRepository([m, m2]);

		expect(mgs).toBeDefined();
		expect(mgs).toHaveProperty("db", [m, m2]);
	});
	it("should save new muscle group to its db property", () => {
		const mgs = new InMemoryMuscleGroupRepository();

		mgs.save(m);

		expect(mgs).toHaveProperty("db", [m]);
	});
	it("should remove muscle group from its db property", () => {
		const mgs = new InMemoryMuscleGroupRepository([m, m2]);

		mgs.remove(m2);

		expect(mgs).toHaveProperty("db", [m]);
	});
	it("should return all muscle groups when getAll is called", () => {
		const mgs = new InMemoryMuscleGroupRepository([m, m2]);
		expect(mgs.getAll()).toStrictEqual([m, m2]);
	});
});
