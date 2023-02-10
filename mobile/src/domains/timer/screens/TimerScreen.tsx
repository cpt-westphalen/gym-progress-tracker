import { useEffect, useRef, useState } from "react";

import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorTypes } from "../../../../App";

import { DarkGradientCalendarButton } from "../components/DarkGradientCalendarButton";
import { MinutesTextInput } from "../components/MinutesTextInput";
import { SecondsTextInput } from "../components/SecondsTextInput";

import { globalStyles, themeColors } from "../../../styles/globalStyles";
import { timerStyles as styles } from "../styles/timer.styles";

import { formatTime } from "../utils/formatTime";

import { Entypo, AntDesign } from "@expo/vector-icons";
import { LinearGradientBackground } from "../../../components/LinearGradientBackground";

export const TimerScreen = ({
	navigation,
}: NativeStackScreenProps<RootStackNavigatorTypes, "Timer">) => {
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
		if (time.seconds > 59) setTime((prev) => ({ ...prev, seconds: 59 }));
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
		if (num >= 60) setTime((prevTime) => ({ ...prevTime, seconds: 59 }));
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
		<LinearGradientBackground>
			<View style={globalStyles.container}>
				<View style={{ padding: 8 }}>
					<Text style={globalStyles.pageTitle}>Count-down Timer</Text>

					<View
						style={{
							flexDirection: "row",
							marginHorizontal: -8,
							marginTop: 12,
						}}>
						<MinutesTextInput
							handleMinInputFocus={handleMinInputFocus}
							handleMinutesInput={handleMinutesInput}
							minRef={minRef}
							secRef={secRef}
							time={time}
						/>
						<SecondsTextInput
							time={time}
							secRef={secRef}
							handleSecInputFocus={handleSecInputFocus}
							handleSecondsInput={handleSecondsInput}
						/>
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
								color={themeColors.backgroundOffset}
							/>
						) : (
							<Entypo
								name='controller-play'
								size={72}
								color={themeColors.backgroundOffset}
							/>
						)}
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Home")}>
					<DarkGradientCalendarButton />
				</TouchableOpacity>
			</View>
		</LinearGradientBackground>
	);
};
