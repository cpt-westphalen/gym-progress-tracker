import { daysOfWeek, months } from "./calendarNames";
import { isSameDate } from "./isSameDate";

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
