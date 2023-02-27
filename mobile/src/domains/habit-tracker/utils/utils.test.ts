import { daysOfWeek, months } from "./calendarNames";
import { workoutSessionIsFromSameMonth } from "./workoutSessionIsFromSameMonth";
import { isSameDate } from "./isSameDate";
import { WorkoutSession } from "../entities/WorkoutSession";
import { Workout } from "../../workout/entities/Workout";

describe("isSameDate utils", () => {
	it("should return false if two dates provided are different", () => {
		const d1 = new Date(2023, 2, 13);
		const d2 = new Date(2023, 5, 24);
		const result = isSameDate(d1, d2);
		expect(result).toBe(false);
	});
	it("should return true if two dates with different times are provided as input", () => {
		const d1 = new Date(2023, 1, 1);
		d1.setHours(12);
		const d2 = new Date(2023, 1, 1);
		d2.setHours(18);
		const result = isSameDate(d1, d2);
		expect(result).toBe(true);
	});
	it("should return false if two dates with the same day and month but different years are provided", () => {
		const d1 = new Date(2022, 1, 1);
		d1.setHours(12);
		const d2 = new Date(2023, 1, 1);
		d2.setHours(12);
		const result = isSameDate(d1, d2);
		expect(result).toBe(false);
	});
});

describe("calendarNames utils", () => {
	it("should have all months names", () => {
		expect(months).toHaveLength(12);
	});
	it("should have all weekdays names", () => {
		expect(daysOfWeek).toHaveLength(7);
	});
});

describe("isFromSameMonth utils", () => {
	it("should return a function for comparing dates with same year and month", () => {
		const fn = workoutSessionIsFromSameMonth(new Date(2023, 1, 1));
		expect.assertions(3);
		expect(fn).toBeDefined();
		expect(fn).toBeInstanceOf(Function);
		expect(
			fn(
				new WorkoutSession({
					date: new Date(2023, 1, 20),
					details: "",
					userId: null,
					workout: {} as Workout,
				})
			)
		).toBe(true);
	});
	it("should return false for a workoutSession.date with a different year", () => {
		const fn = workoutSessionIsFromSameMonth(new Date(2023, 1, 1));
		const workoutSession = new WorkoutSession({
			date: new Date(2022, 1, 2),
			details: "",
			userId: null,
			workout: {} as Workout,
		});
		expect(fn(workoutSession)).toBe(false);
	});
});
