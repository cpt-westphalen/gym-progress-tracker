import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorTypes } from "../../App";

import { DefaultBottomGradientButton } from "../components/DefaultBottomGradientButton";
import { LinearGradientBackground } from "../components/LinearGradientBackground";

import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../styles/globalStyles";

export const CalendarScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Calendar">) => {
	return (
		<LinearGradientBackground>
			<View style={globalStyles.container}>
				<Text style={globalStyles.pageTitle}>Month</Text>
			</View>
			<View
				style={{
					...globalStyles.container,
					alignItems: "center",
				}}>
				<Text style={globalStyles.pageTitle}>
					Did you workout today?
				</Text>
			</View>

			<View style={{ flex: 1, justifyContent: "flex-end" }}>
				<DefaultBottomGradientButton
					onPress={() => navigation.navigate("Timer")}>
					<Ionicons
						name='timer-outline'
						size={36}
					/>
				</DefaultBottomGradientButton>
			</View>
		</LinearGradientBackground>
	);
};
