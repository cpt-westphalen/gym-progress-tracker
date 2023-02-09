import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorTypes } from "../../App";

export const HomeScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Home">) => {
	return (
		<View>
			<Text>Home Screen</Text>
			<Button
				title='Timer'
				onPress={() => navigation.navigate("Timer")}
			/>
		</View>
	);
};
