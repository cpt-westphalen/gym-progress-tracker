import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorTypes } from "../../App";
import { LinearGradient } from "expo-linear-gradient";
import { DefaultBottomGradientButton } from "../components/DefaultBottomGradientButton";

import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";

export const CalendarScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Calendar">) => {
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				colors={["#000", "#101010"]}
				start={{ x: 0, y: 0.18 }}
				end={{ x: 1, y: 0.95 }}
				locations={[0.1, 0.9]}
				style={{ flex: 1 }}>
				<View
					style={{
						...globalStyles.container,
						backgroundColor: "transparent",
					}}>
					<Text style={globalStyles.pageTitle}>Month</Text>
				</View>
				<View
					style={{
						...globalStyles.container,
						backgroundColor: "transparent",
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
			</LinearGradient>
		</View>
	);
};
