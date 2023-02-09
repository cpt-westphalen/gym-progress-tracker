import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../../styles/globalStyles";

export const DarkGradientCalendarButton = () => {
	return (
		<LinearGradient
			style={{
				height: 64,
				borderTopLeftRadius: 8,
				borderTopRightRadius: 8,
				justifyContent: "center",
				alignItems: "center",
			}}
			colors={["#1B6662", "#072725"]}
			start={{ x: 0.55, y: 0.3 }}
			end={{ x: 0.56, y: 1 }}>
			<AntDesign
				name='calendar'
				size={36}
				color={"#000"}
			/>
		</LinearGradient>
	);
};
