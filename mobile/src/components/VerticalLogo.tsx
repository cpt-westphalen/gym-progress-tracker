import { View, Text } from "react-native";

export const VerticalLogo = () => {
	return (
		<View>
			<Text
				style={{
					fontSize: 18,
					color: "#fff",
					lineHeight: 22,
				}}>
				Gym Progress
			</Text>
			<Text
				style={{
					fontSize: 42,
					fontWeight: "900",
					letterSpacing: 4.1,
					color: "#fff",
					lineHeight: 48,
				}}>
				TRACKER
			</Text>
		</View>
	);
};
