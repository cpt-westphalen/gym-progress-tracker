import {
	GestureResponderEvent,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useContext, useEffect, useMemo, useState } from "react";

import { Picker } from "@react-native-picker/picker";

import { globalStyles, themeColors } from "../../../styles/globalStyles";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import {
	WorkoutSessionContext,
	WorkoutSessionsDispatch,
} from "../../../contexts/workoutSessionsContext/WorkoutSessionsContext";

import { WorkoutContext } from "../../../contexts/WorkoutContext/WorkoutContext";
import { isSameDate } from "../../habit-tracker/utils/isSameDate";
import { NewWorkoutModal } from "./NewWorkoutModal";

export function WorkoutInput({}) {
	const [showWorkoutPicker, setShowWorkoutPicker] = useState(false);
	const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
	const [showNewWorkoutModal, setShowNewWorkoutModal] = useState(false);

	const { workouts } = useContext(WorkoutContext);

	const { workoutSessions } = useContext(WorkoutSessionContext);
	const workoutSessionsDispatcher = useContext(WorkoutSessionsDispatch);

	const todaySession = useMemo(
		() =>
			Boolean(
				workoutSessions.find((w) => isSameDate(new Date(), w.date))
			),
		[workoutSessions]
	);

	useEffect(() => {
		if (!showWorkoutPicker) {
			setSelectedWorkout(null);
		}
	}, [showWorkoutPicker]);

	useEffect(() => {
		if (todaySession && showWorkoutPicker) {
			setShowWorkoutPicker(false);
		}
	}, [todaySession]);

	function handlePressYesButton() {
		if (!showWorkoutPicker) {
			if (workouts.length > 0) setShowWorkoutPicker(true);
			else setShowNewWorkoutModal(true);
		}
		if (
			showWorkoutPicker &&
			selectedWorkout !== null &&
			workoutSessionsDispatcher
		) {
			const workout = workouts.find((w) => w.title == selectedWorkout);
			if (workout) {
				workoutSessionsDispatcher({
					type: "add_workout_session",
					payload: {
						date: new Date(),
						details: null,
						userId: null,
						workout,
					},
				});
			}
			setShowWorkoutPicker(false);
		}
	}

	return (
		<View style={styles.container}>
			<Text style={{ ...globalStyles.pageTitle }}>
				{todaySession
					? "Change today's session?"
					: "Did you workout today?"}
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
									{workouts.map((workout) => (
										<Picker.Item
											key={workout.id}
											label={workout.title}
											value={workout.title}
										/>
									))}
									<Picker.Item
										label='Select Workout...'
										value={null}
									/>
								</Picker>
							</View>
							<TouchableOpacity
								onPress={() => setShowNewWorkoutModal(true)}
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
							</TouchableOpacity>
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
							...(todaySession
								? { borderColor: themeColors.highlight }
								: selectedWorkout
								? {
										borderColor: themeColors.highlight,
										backgroundColor:
											themeColors.terciaryNeutral,
								  }
								: {
										borderColor: themeColors.primaryNeutral,
								  }),
						}}
						onPress={handlePressYesButton}>
						<FontAwesome
							name='check'
							size={24}
							color={
								todaySession
									? themeColors.highlight
									: showWorkoutPicker
									? selectedWorkout
										? themeColors.highlight
										: themeColors.primaryNeutral
									: themeColors.primaryForeground
							}
						/>
					</TouchableOpacity>
				</View>
			</View>
			{showNewWorkoutModal && (
				<NewWorkoutModal
					onClose={() => {
						setShowNewWorkoutModal(false);
						setShowWorkoutPicker(true);
					}}
				/>
			)}
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
