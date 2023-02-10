import {
	Image,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { RootStackNavigatorTypes } from "../../App";

import { VerticalLogo } from "../components/VerticalLogo";

import { globalStyles } from "../styles/globalStyles";

const GptLogoDots = require("../assets/gpt-logo-dots.png");

export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Home">) => {
	let showHighlight = false;

	const handlePressEnter = () => {
		navigation.navigate("Calendar");
	};

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
						alignItems: "center",
						justifyContent: "space-around",
					}}>
					<View style={{ alignItems: "center" }}>
						<VerticalLogo />
						<Image
							source={GptLogoDots}
							resizeMode='contain'
							style={{ width: 130 }}
						/>
					</View>

					<View>
						<TouchableOpacity
							onPress={handlePressEnter}
							style={{
								borderWidth: 2,
								borderColor: "#3CE8FF",
								borderRadius: 12,
								width: 240,
								height: 52,
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Text
								style={{
									...globalStyles.baseText,
									fontSize: 18,
									fontWeight: "600",
									color: "#3CE8FF",
								}}>
								Enter
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								marginTop: 8,
								marginBottom: -32,
								height: 52,
								alignItems: "center",
								justifyContent: "center",
							}}>
							<Text
								style={{
									...globalStyles.baseText,
									fontSize: 12,
									color: "#1E1E1E",
								}}>
								Languages
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
};
