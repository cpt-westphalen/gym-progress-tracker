import { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	Image,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";
import { formatTime } from "../utils/formatTime";
import { Entypo, AntDesign } from "@expo/vector-icons";

import { globalStyles } from "../../../styles/globalStyles";

export const TimerScreen = () => {
	const [time, setTime] = useState({ minutes: 0, seconds: 0 });
	const [timeLeft, setTimeLeft] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const minRef = useRef<TextInput>(null);
	const secRef = useRef<TextInput>(null);

	useEffect(() => {
		if (isRunning) {
			const intervalId = setInterval(() => {
				if (timeLeft <= 0) {
					clearInterval(intervalId);
					setIsRunning(false);
					return;
				}
				setTimeLeft((t) => t - 100);
			}, 100);
			return () => clearInterval(intervalId);
		}
	}, [isRunning, timeLeft]);

	useEffect(() => {
		if (!isRunning) {
			setTimeLeft((time.minutes * 60 + time.seconds) * 1000);
		}
	}, [time.minutes, time.seconds]);

	const handleTimerToggle = () => {
		setIsRunning((isRunning) => !isRunning);
	};

	const handleMinutesInput = (text: string) => {
		if (!text) text = "0";
		const num = parseInt(text, 10);
		if (num !== time.minutes && num >= 0) {
			setTime((prevTime) => ({ ...prevTime, minutes: num }));
		}
	};

	const handleSecondsInput = (text: string) => {
		if (!text) text = "0";
		const num = parseInt(text, 10);
		if (num !== time.seconds && num >= 0) {
			setTime((prevTime) => ({ ...prevTime, seconds: num }));
		}
	};

	const handleMinInputFocus = (event: GestureResponderEvent) => {
		if (minRef.current) {
			minRef.current.focus();
		}
	};

	const handleSecInputFocus = (event: GestureResponderEvent) => {
		if (secRef.current) {
			secRef.current.focus();
		}
	};

	const [minutes, seconds, ms] = formatTime(timeLeft);

	return (
		<View style={globalStyles.container}>
			<View style={{ padding: 8 }}>
				<Text style={globalStyles.pageTitle}>Count-down Timer</Text>

				<View
					style={{
						flexDirection: "row",
						marginHorizontal: -8,
						marginTop: 12,
					}}>
					<TouchableOpacity
						style={styles.numInput}
						onPress={handleMinInputFocus}>
						<TextInput
							style={styles.textInput}
							keyboardType='numeric'
							onChangeText={handleMinutesInput}
							value={String(
								time.minutes >= 10
									? time.minutes
									: `0${time.minutes}`
							)}
							ref={minRef}
						/>
						<Text style={styles.inputMetric}>min</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.numInput}
						onPress={handleSecInputFocus}>
						<TextInput
							style={styles.textInput}
							keyboardType='numeric'
							onChangeText={handleSecondsInput}
							value={String(
								time.seconds >= 10
									? time.seconds
									: `0${time.seconds}`
							)}
							ref={secRef}
						/>
						<Text style={styles.inputMetric}>sec</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: "flex-end",
					marginBottom: "30%",
				}}>
				<View style={styles.counterView}>
					<Text style={styles.counter}>
						{`${minutes}:${seconds}`}
						<Text style={styles.msCounter}>{`:${ms[0]}`}</Text>
					</Text>
				</View>

				<TouchableOpacity
					style={styles.toggleTimerButton}
					onPress={handleTimerToggle}
					disabled={time.minutes * 60 + time.seconds <= 0}>
					{isRunning ? (
						<AntDesign
							name='pause'
							size={72}
							color={"#040404"}
						/>
					) : (
						<Entypo
							name='controller-play'
							size={72}
							color='#040404'
						/>
					)}
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		color: "#D9D9D9",
		textAlign: "right",
		paddingHorizontal: 8,
		fontSize: 18,
	},
	inputMetric: {
		color: "#393939",
		fontSize: 18,
		paddingHorizontal: 6,
		fontWeight: "600",
	},
	numInput: {
		marginHorizontal: 8,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#4E4E4E",
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 8,
		width: 84,
		height: 40,
		overflow: "hidden",
	},
	counter: {
		fontSize: 64,
		fontWeight: "600",
		color: "#FFF",
	},
	msCounter: {
		fontSize: 32,
		fontWeight: "600",
		color: "#4e4e4e",
	},
	counterView: {
		width: "100%",
		borderStyle: "solid",
		borderBottomLeftRadius: 18,
		borderBottomRightRadius: 18,
		borderBottomWidth: 2,
		borderBottomColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 24,
	},
	toggleTimerButton: {
		marginVertical: 24,
		height: 96,
		width: 96,
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#D9D9D9",
		borderRadius: 64,
	},
});
