import { LinearGradient } from "expo-linear-gradient";
import { themeColors } from "../styles/globalStyles";

type LinearGradientBackgroundProps = {
	colors?: string[];
};

export const LinearGradientBackground = ({
	colors = [],
	children,
}: React.PropsWithChildren<LinearGradientBackgroundProps>) => {
	return (
		<LinearGradient
			colors={[
				colors[0] ?? themeColors.primaryBackground,
				colors[1] ?? themeColors.backgroundOffset,
			]}
			start={{ x: 0, y: 0.18 }}
			end={{ x: 1, y: 0.95 }}
			locations={[0.1, 0.9]}
			style={{ flex: 1 }}>
			{children}
		</LinearGradient>
	);
};
