import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { globalStyles, themeColors } from "../../../styles/globalStyles";

import { FontAwesome } from "@expo/vector-icons";

export function WorkoutInput({}) {
	return (
		<View style={styles.container}>
			<Text style={{ ...globalStyles.pageTitle }}>
				Did you workout today?
			</Text>
			<View style={styles.inputContainer}>
				<YesButton />
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
