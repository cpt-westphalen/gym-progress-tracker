import {
	GestureResponderEvent,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useContext, useEffect, useState } from "react";

import { Picker } from "@react-native-picker/picker";

import { globalStyles, themeColors } from "../../../styles/globalStyles";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { WorkoutSessionsDispatch } from "../../../contexts/workoutSessionsContext/WorkoutSessionsContext";
import { Workout } from "../entities/Workout";

export function WorkoutInput({}) {
	const [showWorkoutPicker, setShowWorkoutPicker] = useState(false);
	const [selectedWorkout, setSelectedWorkout] = useState<string>();

	const workoutSessionsDispatcher = useContext(WorkoutSessionsDispatch);

	useEffect(() => {
		if (!showWorkoutPicker) {
			setSelectedWorkout(undefined);
		}
	}, [showWorkoutPicker, selectedWorkout]);

	function handlePressYesButton() {
		if (showWorkoutPicker && selectedWorkout && workoutSessionsDispatcher) {
			// workoutSessionsDispatcher({type: 'add_workoutSession', payload: selectedWorkout}); // make this work!!!
		}
		setShowWorkoutPicker((prev) => !prev);
	}

	return (
		<View style={styles.container}>
			<Text style={{ ...globalStyles.pageTitle }}>
				Did you workout today?
			</Text>
			<View
				style={{
					...styles.inputContainer,
					alignSelf: "stretch",
				}}>
				{showWorkoutPicker && (
					<View style={{ alignSelf: "center", padding: 16 }}>
						<View
							style={{
								...styles.inputContainer,
								maxHeight: 64,
								minWidth: 320,
								justifyContent: "center",
							}}>
							<View
								style={{
									backgroundColor:
										themeColors.backgroundOffset,
									borderRadius: 8,
									borderColor: themeColors.highlight,
									borderWidth: 2,
								}}>
								<Picker
									selectedValue={selectedWorkout}
									dropdownIconColor={themeColors.highlight}
									style={{
										height: "100%",
										color: themeColors.primaryForeground,
									}}
									onValueChange={(itemValue, itemIndex) =>
										setSelectedWorkout(itemValue)
									}>
									<Picker.Item
										label='Workout A'
										value='A'
									/>
									<Picker.Item
										label='Workout B'
										value='B'
									/>
								</Picker>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignSelf: "center",
									justifyContent: "center",
									alignItems: "center",
									marginTop: 12,
									borderColor: themeColors.secondaryNeutral,
									borderWidth: 2,
									padding: 6,
									borderRadius: 6,
								}}>
								<Text
									style={{
										fontSize: 14,
										color: themeColors.secondaryNeutral,
										marginHorizontal: 6,
									}}>
									Add Training
								</Text>
								<MaterialIcons
									name='add'
									size={24}
									color={themeColors.secondaryNeutral}
								/>
							</View>
						</View>
					</View>
				)}
				<View
					style={{
						...styles.inputContainer,
						justifyContent: "center",
						alignItems: "center",
					}}>
					<TouchableOpacity
						style={{
							...styles.yesBtn,
							...(showWorkoutPicker
								? {
										borderColor: themeColors.highlight,
										backgroundColor:
											themeColors.terciaryNeutral,
								  }
								: {}),
						}}
						onPress={handlePressYesButton}>
						<FontAwesome
							name='check'
							size={24}
							color={
								selectedWorkout
									? themeColors.highlight
									: themeColors.primaryForeground
							}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	yesBtn: {
		paddingVertical: 8,
		width: 64,
		height: 52,
		justifyContent: "center",
		alignItems: "center",
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: themeColors.secondaryForeground,
		borderRadius: 8,
	},
	inputContainer: {
		marginVertical: 16,
	},
});
