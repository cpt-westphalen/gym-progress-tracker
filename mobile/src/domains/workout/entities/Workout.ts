import { MuscleGroup } from "./MuscleGroup";

export type WorkoutProps = {
	id: string;
	title: string;
	muscleGroups: MuscleGroup[];
};

export class Workout {
	constructor(private props: WorkoutProps) {}

	public get id() {
		return this.props.id;
	}

	public get title() {
		return this.props.title;
	}

	public set title(text: string) {
		this.props.title = text;
	}

	public get muscleGroups() {
		return this.props.muscleGroups;
	}

	public get muscleGroupNames() {
		return this.props.muscleGroups.map((mg) => mg.name);
	}
}
