import { View, Text } from "react-native";
import { themeColors } from "../styles/globalStyles";

export const LinearLogo = () => {
	return (
		<View>
			<Text
				style={{
					fontSize: 12,
					color: themeColors.primaryForeground,
				}}>
				Gym Progress{" "}
				<Text
					style={{
						fontWeight: "900",
						letterSpacing: 1,
						color: themeColors.primaryForeground,
					}}>
					TRACKER
				</Text>
			</Text>
		</View>
	);
};
