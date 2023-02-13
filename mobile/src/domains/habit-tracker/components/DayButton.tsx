import { StyleSheet, Text, View } from "react-native";
import { globalStyles, themeColors } from "../../../styles/globalStyles";
import { useMemo } from "react";

export type DayButtonProps = {
	date: Date;
	isDisabled?: boolean;
	isSelected?: boolean;
};

const DayButtonComp = ({
	date,
	isDisabled = false,
	isSelected = false,
}: DayButtonProps) => {
	const text = date.getDate();

	return (
		<View
			style={
				isDisabled
					? styles.disabled
					: isSelected
					? styles.selected
					: styles.container
			}>
			<Text style={styles.innerText}>{text || "n"}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 2,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		minHeight: 33,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: themeColors.secondaryNeutral,
		borderRadius: 8,
		backgroundColor: themeColors.backgroundOffset,
	},
	disabled: {
		margin: 2,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		minHeight: 33,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: themeColors.terciaryNeutral,
		borderRadius: 8,
		backgroundColor: themeColors.primaryBackground,
	},
	selected: {
		margin: 2,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		minHeight: 33,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: themeColors.highlight,
		borderRadius: 8,
		backgroundColor: themeColors.highlight,
	},
	innerText: {
		...globalStyles.baseText,
		fontSize: 14,
		color: themeColors.secondaryNeutral,
	},
});

export const DayButton = (props: DayButtonProps) =>
	useMemo(() => {
		return <DayButtonComp {...props} />;
	}, [props.date, props.isDisabled, props.isSelected]);
