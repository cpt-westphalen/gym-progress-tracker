import { WorkoutSession } from "../../domains/habit-tracker/entities/WorkoutSession";
import { InMemoryWorkoutSessionRepository } from "./InMemoryWorkoutSessionRepository";
import { Workout } from "../../domains/workout/entities/Workout";
import { MuscleGroup } from "../../domains/workout/entities/MuscleGroup";

describe("In-Memo Workout Session Repository", () => {
	const userId = "1234";

	const w = new Workout({ id: "1", muscleGroups: [], title: "test-workout" });
	const w2 = new Workout({
		id: "1",
		muscleGroups: [new MuscleGroup({ icon: "#", name: "mg" })],
		title: "workout",
	});

	const ws1 = new WorkoutSession({
		date: new Date(),
		details: "Test description",
		userId,
		workout: w,
	});

	const ws2 = new WorkoutSession({
		date: new Date(2023, 2, 1),
		details: "",
		userId: null,
		workout: w2,
	});

	it("should be created empty with no errors", () => {
		expect(() => {
			const repo = new InMemoryWorkoutSessionRepository();
		}).not.toThrow();
	});
	it("should be created with provided initial values", () => {
		const repo = new InMemoryWorkoutSessionRepository([ws1, ws2]);
		expect(repo).toHaveProperty("db", [ws1, ws2]);
	});
	it("should return all workout sessions if no userId is provided", () => {
		const repo = new InMemoryWorkoutSessionRepository([ws1, ws2]);
		const workouts = repo.getAll();
		expect(workouts).toStrictEqual([ws1, ws2]);
	});
	it("should return user's workout sessions if userId is provided", () => {
		const repo = new InMemoryWorkoutSessionRepository([ws1, ws2]);
		const workouts = repo.getAll(userId);
		expect(workouts).toStrictEqual([ws1]);
	});
	it("should save new workout session to db property", () => {
		const repo = new InMemoryWorkoutSessionRepository([ws1]);
		repo.save(ws2);
		expect(repo).toHaveProperty("db", [ws1, ws2]);
	});
	it("should remove workout session from db property", () => {
		const repo = new InMemoryWorkoutSessionRepository([ws1, ws2]);
		repo.remove(ws1);
		expect(repo).toHaveProperty("db", [ws2]);
	});
});
