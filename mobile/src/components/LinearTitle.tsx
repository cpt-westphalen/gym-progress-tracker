import { View, Text } from "react-native";

export const LinearTitle = () => {
	return (
		<View>
			<Text
				style={{
					fontSize: 12,
					color: "#fff",
				}}>
				Gym Progress{" "}
				<Text
					style={{
						fontWeight: "900",
						letterSpacing: 1,
						color: "#fff",
					}}>
					TRACKER
				</Text>
			</Text>
		</View>
	);
};
