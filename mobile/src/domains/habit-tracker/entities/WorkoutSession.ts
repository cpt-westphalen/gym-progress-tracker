import { Workout } from "../../workout/entities/Workout";

type WorkoutSessionProps = {
	date: Date;
	workout: Workout;
	details: string | null;
	userId: string | null;
};

export class WorkoutSession {
	constructor(private props: WorkoutSessionProps) {}

	get date(): Date {
		return this.props.date;
	}

	get workout(): Workout {
		return this.props.workout;
	}

	get details(): string {
		return this.props.details ?? "";
	}

	set workout(newWorkout: Workout) {
		this.props.workout = newWorkout;
	}

	set details(text: string) {
		this.props.details = text;
	}

	get userId(): string | null {
		return this.props.userId ?? null;
	}

	set userId(id: string | null) {
		this.props.userId = id;
	}
}
