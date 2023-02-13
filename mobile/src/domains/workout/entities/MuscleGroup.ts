type MuscleGroupProps = {
	name: string;
	icon: string | null;
};

export class MuscleGroup {
	constructor(private props: MuscleGroupProps) {
		if (!props.icon) props.icon = null;
		this.props = props;
	}

	get name() {
		return this.props.name;
	}

	get icon() {
		return this.props.icon;
	}

	public set icon(assetUrl: string | null) {
		this.icon = assetUrl;
	}
}
