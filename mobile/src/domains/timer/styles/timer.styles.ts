import { StyleSheet } from "react-native";
import { themeColors } from "../../../styles/globalStyles";

export const timerStyles = StyleSheet.create({
	textInput: {
		color: themeColors.secondaryForeground,
		textAlign: "right",
		paddingHorizontal: 8,
		fontSize: 18,
	},
	inputMetric: {
		color: themeColors.secondaryNeutral,
		fontSize: 18,
		paddingHorizontal: 6,
		fontWeight: "600",
	},
	numInput: {
		marginHorizontal: 8,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		borderColor: themeColors.primaryNeutral,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 8,
		width: 84,
		height: 40,
		overflow: "hidden",
	},
	counter: {
		fontSize: 64,
		fontWeight: "600",
		color: themeColors.primaryForeground,
	},
	msCounter: {
		fontSize: 32,
		fontWeight: "600",
		color: themeColors.primaryNeutral,
	},
	counterView: {
		width: "100%",
		borderStyle: "solid",
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		borderBottomWidth: 2,
		borderBottomColor: themeColors.primaryForeground,
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 24,
	},
	toggleTimerButton: {
		marginVertical: 24,
		height: 96,
		width: 96,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: themeColors.primaryForeground,
		borderRadius: 64,
	},
});
