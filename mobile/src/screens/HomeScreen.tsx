import { Image, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackNavigatorTypes } from "../../App";

import { LinearGradientBackground } from "../components/LinearGradientBackground";
import { VerticalLogo } from "../components/VerticalLogo";

import { globalStyles, themeColors } from "../styles/globalStyles";

const GptLogoDots = require("../assets/gpt-logo-dots.png");

export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Home">) => {
	const handlePressEnter = () => {
		navigation.navigate("Calendar");
	};

	return (
		<LinearGradientBackground>
			<View
				style={{
					...globalStyles.container,
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
							borderColor: themeColors.highlight,
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
								color: themeColors.highlight,
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
								color: themeColors.secondaryNeutral,
							}}>
							Languages
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradientBackground>
	);
};
