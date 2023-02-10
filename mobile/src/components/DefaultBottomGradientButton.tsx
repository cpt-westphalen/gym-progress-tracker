import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { themeColors } from "../styles/globalStyles";

type DefaultBottomGradientButtonProps = {
	onPress: (event: GestureResponderEvent) => void;
	startColor?: string;
	endColor?: string;
};

export const DefaultBottomGradientButton = ({
	onPress,
	startColor,
	endColor,
	children,
}: React.PropsWithChildren<DefaultBottomGradientButtonProps>) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				backgroundColor: themeColors.highlight,
				borderTopLeftRadius: 8,
				borderTopRightRadius: 8,
			}}>
			<LinearGradient
				style={{
					height: 64,
					justifyContent: "center",
					alignItems: "center",
					borderTopLeftRadius: 8,
					borderTopRightRadius: 8,
				}}
				colors={[
					startColor ?? themeColors.highlight,
					endColor ?? themeColors.darkHighlight,
				]}
				start={{ x: 0.305, y: 0.1 }}
				end={{ x: 0.3, y: 1 }}>
				{children}
			</LinearGradient>
		</TouchableOpacity>
	);
};
