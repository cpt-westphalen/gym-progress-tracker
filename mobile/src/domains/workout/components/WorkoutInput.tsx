import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import { Picker } from "@react-native-picker/picker";

import { globalStyles, themeColors } from "../../../styles/globalStyles";

import { FontAwesome } from "@expo/vector-icons";

export function WorkoutInput({}) {
	const [selectedWorkout, setSelectedWorkout] = useState();

	// TODO: useContext for dispatching add_workout

	return (
		<View style={styles.container}>
			<Text style={{ ...globalStyles.pageTitle }}>
				Did you workout today?
			</Text>
			<View style={styles.inputContainer}>
				<YesButton />
				<View></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: "10%",
		flexGrow: 1,
		alignItems: "center",
		borderWidth: 1,
		borderStyle: "dashed",
		borderColor: "red",
	},
	yesBtn: {
		paddingVertical: 8,
		width: 64,
		justifyContent: "center",
		alignItems: "center",
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: themeColors.secondaryForeground,
		borderRadius: 8,
	},
	inputContainer: {
		marginVertical: 16,
	},
});

function YesButton({}) {
	return (
		<TouchableOpacity style={styles.yesBtn}>
			<FontAwesome
				name='check'
				size={24}
				color={themeColors.primaryNeutral}
			/>
		</TouchableOpacity>
	);
}
