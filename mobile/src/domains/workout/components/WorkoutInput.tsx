import { Text, View } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";

export function WorkoutInput({}) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Text style={globalStyles.pageTitle}>Did you workout today?</Text>
		</View>
	);
}
