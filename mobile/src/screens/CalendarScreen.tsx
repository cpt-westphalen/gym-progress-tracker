import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackNavigatorTypes } from "../../App";
import { DefaultBottomGradientButton } from "../components/DefaultBottomGradientButton";
import { LinearGradientBackground } from "../components/LinearGradientBackground";
import { Calendar } from "../domains/habit-tracker/components/Calendar";

import { Ionicons } from "@expo/vector-icons";

import { globalStyles } from "../styles/globalStyles";
import { WorkoutSessionsContextProvider } from "../contexts/workoutSessionsContext/WorkoutSessionsContext";

export const CalendarScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Calendar">) => {
	return (
		<WorkoutSessionsContextProvider>
			<LinearGradientBackground>
				<View style={globalStyles.container}>
					<Calendar />
					<View style={{ alignItems: "center" }}>
						<Text style={globalStyles.pageTitle}>
							Did you workout today?
						</Text>
					</View>
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
		</WorkoutSessionsContextProvider>
	);
};
