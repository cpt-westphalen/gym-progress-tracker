import {
	Text,
	TextInput,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";

import { timerStyles as styles } from "../styles/timer.styles";

type MinutesTextInputProps = {
	handleMinInputFocus: (event: GestureResponderEvent) => void;
	handleMinutesInput: (text: string) => void;
	secRef: React.RefObject<TextInput>;
	time: { minutes: number; seconds: number };
	minRef: React.RefObject<TextInput>;
};
export const MinutesTextInput = ({
	handleMinInputFocus,
	handleMinutesInput,
	secRef,
	time,
	minRef,
}: MinutesTextInputProps) => {
	return (
		<TouchableOpacity
			style={styles.numInput}
			onPress={handleMinInputFocus}>
			<TextInput
				style={styles.textInput}
				keyboardType='numeric'
				onChangeText={handleMinutesInput}
				onSubmitEditing={() => {
					secRef.current?.focus();
				}}
				value={String(
					time.minutes >= 10 ? time.minutes : `0${time.minutes}`
				)}
				ref={minRef}
			/>
			<Text style={styles.inputMetric}>min</Text>
		</TouchableOpacity>
	);
};
