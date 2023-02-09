import { Button, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"; // ver depois

export const HomeScreen = ({ navigation }: any) => {
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
