import { useContext, useEffect, useState } from "react";
import {
	Modal,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import uuid from "react-native-uuid";

import { FontAwesome } from "@expo/vector-icons";
import {
	WorkoutContext,
	WorkoutDispatch,
} from "../../../contexts/WorkoutContext/WorkoutContext";

import { MuscleGroup } from "../entities/MuscleGroup";
import { WorkoutProps } from "../entities/Workout";

import { globalStyles, themeColors } from "../../../styles/globalStyles";

export const NewWorkoutModal = ({ onClose }: { onClose: () => void }) => {
	const [selectedMuscleGroups, setSelectedMuscleGroups] = useState<
		MuscleGroup[]
	>([]);

	const [newWorkoutProps, setNewWorkoutProps] = useState<WorkoutProps>({
		id: uuid.v4() as string,
		muscleGroups: selectedMuscleGroups,
		title: "",
	});

	const { workouts, muscleGroups } = useContext(WorkoutContext);
	const workoutDispatch = useContext(WorkoutDispatch);

	useEffect(() => {
		setNewWorkoutProps((prevState) => ({
			...prevState,
			muscleGroups: selectedMuscleGroups,
		}));
	}, [selectedMuscleGroups]);

	function handleChangeTitle(value: string) {
		if (value !== newWorkoutProps.title) {
			setNewWorkoutProps((prevState) => ({ ...prevState, title: value }));
		}
	}

	function handleValueSelect(value: any, index: number): void {
		if (value == null) return;
		setSelectedMuscleGroups((prevState) => [...prevState, value]);
	}

	function handleValueRemove(value: MuscleGroup) {
		setSelectedMuscleGroups((prevState) =>
			prevState.filter((sm) => sm.name !== value.name)
		);
	}

	function handleSubmit() {
		if (workoutDispatch && newWorkoutProps.title.length >= 3) {
			workoutDispatch({ type: "add_workout", payload: newWorkoutProps });
			handleClose();
		}
	}

	function handleClose() {
		onClose();
	}

	return (
		<Modal
			visible={true}
			animationType='slide'
			transparent={true}
			onRequestClose={handleClose}
			onAccessibilityEscape={handleClose}>
			<Pressable
				style={styles.overlay}
				onPress={handleClose}>
				<View
					style={styles.modal}
					onStartShouldSetResponder={() => true}
					onResponderEnd={(e) => {
						Keyboard.dismiss();
						e.stopPropagation();
					}}>
					<View
						style={{
							justifyContent: "center",
						}}>
						<View style={styles.titleContainer}>
							<Text style={globalStyles.pageTitle}>
								New Workout
							</Text>
						</View>

						<View>
							<Text style={styles.labels}>Display name</Text>
							<TextInput
								style={styles.displayInput}
								onChangeText={handleChangeTitle}
							/>
						</View>

						<View>
							{!(newWorkoutProps.title.length >= 3) && (
								<Text style={styles.errorText}>
									Please, use at least 3 characters
								</Text>
							)}
						</View>

						<View style={{ marginTop: 12 }}>
							<Text style={styles.labels}>
								Muscle Groups Used
							</Text>
							<View style={styles.selectedMuscleGroupsView}>
								{selectedMuscleGroups.map((item) => (
									<TouchableOpacity
										onPress={() => handleValueRemove(item)}
										key={item.name}
										style={{
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											borderRadius: 5,
											borderWidth: 1,
											borderStyle: "solid",
											borderColor:
												themeColors.darkHighlight,
											backgroundColor:
												themeColors.backgroundOffset,
											paddingVertical: 6,
											paddingHorizontal: 12,
											marginHorizontal: 4,
										}}>
										<Text
											style={{
												...globalStyles.baseText,
												fontWeight: "500",
											}}>
											{item.name}
										</Text>

										<View style={{ marginLeft: 8 }}>
											<FontAwesome
												name='close'
												size={16}
												color={
													themeColors.primaryForeground
												}
											/>
										</View>
									</TouchableOpacity>
								))}
							</View>

							<View style={styles.picker}>
								<Picker
									onValueChange={handleValueSelect}
									style={{
										width: "100%",
									}}
									selectedValue={null}
									dropdownIconColor={
										themeColors.primaryNeutral
									}>
									{muscleGroups
										.filter(
											(m) =>
												selectedMuscleGroups.findIndex(
													(sm) => m.name == sm.name
												) === -1
										)
										.map((item) => (
											<Picker.Item
												key={item.name}
												label={item.name}
												value={item}
											/>
										))}
									<Picker.Item
										label='Add muscle group...'
										color={themeColors.secondaryNeutral}
										value={null}
									/>
								</Picker>
							</View>
						</View>

						<View style={styles.buttonsView}>
							<TouchableOpacity
								onPress={onClose}
								style={styles.cancelBtnView}>
								<Text style={styles.cancelBtnText}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={handleSubmit}
								disabled={newWorkoutProps.title.length < 3}
								style={{
									...styles.confirmBtnView,
									backgroundColor:
										newWorkoutProps.title.length >= 3
											? themeColors.darkHighlight
											: themeColors.secondaryNeutral,
								}}>
								<Text
									style={{
										...styles.confirmBtnText,
										color:
											newWorkoutProps.title.length >= 3
												? themeColors.primaryForeground
												: themeColors.secondaryForeground,
									}}>
									CREATE WORKOUT
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Pressable>
		</Modal>
	);
};

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#040404DD",
		justifyContent: "center",
		alignItems: "center",
	},
	modal: {
		paddingHorizontal: 16,
		paddingTop: 2,
		maxHeight: "96%",
		width: "96%",
		backgroundColor: themeColors.primaryBackground,
		borderWidth: 2,
		borderColor: themeColors.darkHighlight,
		borderStyle: "dashed",
		borderRadius: 12,
		zIndex: 3,
	},
	titleContainer: {
		marginTop: 16,
		marginBottom: 12,
	},
	labels: {
		...globalStyles.pageTitle,
		fontSize: 18,
		marginTop: 12,
		marginBottom: 12,
	},
	displayInput: {
		minHeight: 40,
		width: "100%",
		backgroundColor: themeColors.backgroundOffset,
		color: themeColors.primaryForeground,
		borderColor: themeColors.terciaryNeutral,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 3,
		paddingHorizontal: 8,
	},
	errorText: {
		color: themeColors.primaryNeutral,
		fontSize: 12,
		fontStyle: "italic",
	},
	selectedMuscleGroupsView: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		marginBottom: 16,
	},
	picker: {
		width: "100%",
		minHeight: 40,
		justifyContent: "center",
		backgroundColor: themeColors.backgroundOffset,
		color: themeColors.primaryForeground,
		borderColor: themeColors.terciaryNeutral,
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 8,
	},
	buttonsView: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingVertical: 24,
	},
	cancelBtnView: {
		marginHorizontal: 24,
	},
	cancelBtnText: {
		color: themeColors.primaryNeutral,
	},
	confirmBtnView: {
		backgroundColor: themeColors.darkHighlight,
		padding: 12,
		borderRadius: 4,
	},
	confirmBtnText: {
		color: themeColors.primaryForeground,
		fontWeight: "500",
	},
});
