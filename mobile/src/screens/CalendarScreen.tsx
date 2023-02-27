import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackNavigatorTypes } from "../../App";
import { DefaultBottomGradientButton } from "../components/DefaultBottomGradientButton";
import { LinearGradientBackground } from "../components/LinearGradientBackground";
import { Calendar } from "../domains/habit-tracker/components/Calendar";

import { Ionicons } from "@expo/vector-icons";

import { WorkoutSessionsContextProvider } from "../contexts/workoutSessionsContext/WorkoutSessionsContext";
import { WorkoutInput } from "../domains/workout/components/WorkoutInput";
import { WorkoutContextProvider } from "../contexts/WorkoutContext/WorkoutContext";

export const CalendarScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Calendar">) => {
	return (
		<LinearGradientBackground>
			<View style={{ flex: 1, justifyContent: "space-between" }}>
				<View
					style={{
						flex: 1,
						paddingTop: 32,
					}}>
					<WorkoutContextProvider>
						<WorkoutSessionsContextProvider>
							<Calendar />
							<WorkoutInput />
						</WorkoutSessionsContextProvider>
					</WorkoutContextProvider>
				</View>
				<View
					style={{
						justifyContent: "flex-end",
					}}>
					<DefaultBottomGradientButton
						onPress={() => navigation.navigate("Timer")}>
						<Ionicons
							name='timer-outline'
							size={36}
						/>
					</DefaultBottomGradientButton>
				</View>
			</View>
		</LinearGradientBackground>
	);
};
