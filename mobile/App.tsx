import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TimerScreen } from "./src/domains/timer/screens/TimerScreen";
import { LinearLogo } from "./src/components/LinearLogo";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CalendarScreen } from "./src/screens/CalendarScreen";

const Stack = createNativeStackNavigator<RootStackNavigatorTypes>();

export type RootStackNavigatorTypes = {
	Home: undefined;
	Timer: undefined;
	Calendar: undefined;
};

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1, backgroundColor: "#040404" }}>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{
						statusBarColor: "#000",
						navigationBarColor: "#000",
						headerTitleAlign: "center",
						headerStyle: { backgroundColor: "#040404" },
						headerTintColor: "#fff",
						headerTitle: () => <LinearLogo />,
					}}>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='Calendar'
						component={CalendarScreen}
					/>
					<Stack.Screen
						name='Timer'
						component={TimerScreen}
					/>
				</Stack.Navigator>
			</SafeAreaView>
		</NavigationContainer>
	);
}
