import {
	Text,
	TextInput,
	TouchableOpacity,
	GestureResponderEvent,
} from "react-native";

import { timerStyles as styles } from "../styles/timer.styles";

type SecondTextInputProps = {
	handleSecInputFocus: (event: GestureResponderEvent) => void;
	handleSecondsInput: (text: string) => void;
	time: {
		minutes: number;
		seconds: number;
	};
	secRef: React.RefObject<TextInput>;
};
export function SecondsTextInput({
	handleSecInputFocus,
	handleSecondsInput,
	time,
	secRef,
}: SecondTextInputProps) {
	return (
		<TouchableOpacity
			style={styles.numInput}
			onPress={handleSecInputFocus}>
			<TextInput
				style={styles.textInput}
				keyboardType='numeric'
				onChangeText={handleSecondsInput}
				value={String(
					time.seconds >= 10 ? time.seconds : `0${time.seconds}`
				)}
				ref={secRef}
			/>
			<Text style={styles.inputMetric}>sec</Text>
		</TouchableOpacity>
	);
}
