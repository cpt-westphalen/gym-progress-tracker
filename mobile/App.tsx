import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TimerScreen } from "./src/domains/timer/screens/TimerScreen";
import { LinearTitle } from "./src/components/LinearTitle";
import { HomeScreen } from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackNavigatorTypes>();

export type RootStackNavigatorTypes = {
	Home: undefined;
	Timer: undefined;
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					statusBarColor: "#000",
					navigationBarColor: "#000",
					headerTitleAlign: "center",
					headerStyle: { backgroundColor: "#040404" },
					headerTintColor: "#fff",
					headerTitle: () => <LinearTitle />,
				}}>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
				/>
				<Stack.Screen
					name='Timer'
					component={TimerScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
