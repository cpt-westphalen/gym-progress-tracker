import { StyleSheet, Text, View } from "react-native";
import { globalStyles, themeColors } from "../../../styles/globalStyles";
import { WorkoutSession } from "../entities/WorkoutSession";

export type DayButtonProps = {
	workoutSession: WorkoutSession;
};

export const DayButton = ({
	workoutSession: { date, details, userId, workout },
}: DayButtonProps) => {
	const now = new Date();

	const text = date.getDate();

	const isDisabled =
		date < new Date(now.getFullYear(), now.getMonth(), 1) ||
		date.getDate() > now.getDate() ||
		date > new Date(now.getFullYear(), now.getMonth() + 1, 0);

	const isSelected = workout !== null;

	const isToday =
		now.getFullYear() == date.getFullYear() &&
		now.getMonth() == date.getMonth() &&
		now.getDate() == date.getDate();

	return (
		<View
			style={{
				...styles.default,
				...(isDisabled
					? styles.disabled
					: isSelected
					? styles.selected
					: isToday
					? styles.today
					: {}),
			}}>
			<Text
				style={{
					...styles.innerText,
					...(isToday ? styles.todayText : {}),
				}}>
				{text}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	default: {
		margin: 2,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		minHeight: 33,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: themeColors.secondaryNeutral,
		backgroundColor: themeColors.backgroundOffset,
	},
	today: {
		borderColor: themeColors.highlight,
		backgroundColor: themeColors.terciaryNeutral,
	},
	todayText: {
		color: themeColors.secondaryForeground,
	},
	disabled: {
		borderColor: themeColors.terciaryNeutral,
		backgroundColor: themeColors.primaryBackground,
	},
	selected: {
		borderColor: themeColors.highlight,
		backgroundColor: themeColors.highlight,
	},
	innerText: {
		...globalStyles.baseText,
		fontSize: 14,
		color: themeColors.secondaryNeutral,
	},
});
