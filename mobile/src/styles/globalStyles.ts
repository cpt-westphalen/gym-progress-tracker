import { StyleSheet } from "react-native";

const colors = {
	blue: {
		neon: "#3CE8FF",
		medium: "#1B6662",
	},
	dark: {
		black: "#000",
		offBlack: "#101010",
		zinc: "#202020",
		gray: "#393939",
	},
	light: {
		white: "#FFF",
		zinc: "D9D9D9",
		gray: "#4E4E4E",
	},
};

export const themeColors = {
	highlight: colors.blue.neon,
	darkHighlight: colors.blue.medium,
	primaryForeground: colors.light.white,
	secondaryForeground: colors.light.zinc,
	primaryNeutral: colors.light.gray,
	secondaryNeutral: colors.dark.gray,
	terciaryNeutral: colors.dark.zinc,
	backgroundOffset: colors.dark.offBlack,
	primaryBackground: colors.dark.black,
};

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 18,
	},
	baseText: {
		color: themeColors.primaryForeground,
	},
	pageTitle: {
		color: themeColors.primaryForeground,
		fontSize: 24,
		fontWeight: "600",
	},
});
