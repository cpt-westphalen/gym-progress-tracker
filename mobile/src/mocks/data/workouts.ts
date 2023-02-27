import { Workout } from "../../domains/workout/entities/Workout";
import { arms, back, chest, legs } from "./muscleGroups";

export const workoutA = new Workout({
		id: "001",
		muscleGroups: [arms, chest, legs],
		title: "Workout A",
	}),
	workoutB = new Workout({
		id: "002",
		muscleGroups: [arms, back, legs],
		title: "Workout B",
	});
