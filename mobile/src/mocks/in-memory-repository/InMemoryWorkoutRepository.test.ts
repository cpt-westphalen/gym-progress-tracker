import { MuscleGroup } from "../../domains/workout/entities/MuscleGroup";
import { Workout } from "../../domains/workout/entities/Workout";
import { InMemoryWorkoutRepository } from "./InMemoryWorkoutRepository";

describe("In-Memo Workout Repository", () => {
	const mg1 = new MuscleGroup({ icon: "#", name: "testMG1" });
	const mg2 = new MuscleGroup({ icon: "#", name: "testMG2" });

	const w1 = new Workout({ id: "01", title: "test", muscleGroups: [mg1] });
	const w2 = new Workout({
		id: "02",
		title: "test2",
		muscleGroups: [mg1, mg2],
	});

	it("should create repo without errors", () => {
		expect(() => {
			const workoutRepo = new InMemoryWorkoutRepository();
		}).not.toThrow();
	});

	it("should start with initial Workouts provided", () => {
		const workoutRepo = new InMemoryWorkoutRepository([w1, w2]);

		expect(workoutRepo).toHaveProperty("db", [w1, w2]);
	});
	it("should return all workouts with getAll method", () => {
		const workoutRepo = new InMemoryWorkoutRepository([w1, w2]);
		const workouts = workoutRepo.getAll();
		expect(workouts).toStrictEqual([w1, w2]);
	});
	it("should save new workout", () => {
		const repo = new InMemoryWorkoutRepository();
		repo.save(w2);
		expect(repo).toHaveProperty("db", [w2]);
	});
});
