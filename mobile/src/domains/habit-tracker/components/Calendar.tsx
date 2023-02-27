import { FlatList, Text, View } from "react-native";
import { useContext, useMemo, useRef } from "react";

import { WorkoutSessionContext } from "../../../contexts/workoutSessionsContext/WorkoutSessionsContext";

import { DayButton } from "./DayButton";

import { makeCalendarWorkoutSessions } from "../services/makeCalendarWorkoutSessions";

import { months, daysOfWeek } from "../utils/calendarNames";

import { globalStyles } from "../../../styles/globalStyles";

import { WorkoutSession } from "../entities/WorkoutSession";

const isFromSameMonth = (date: Date) => {
	return (session: WorkoutSession) => {
		return (
			session.date.getFullYear() === date.getFullYear() &&
			session.date.getMonth() === date.getMonth()
		);
	};
};

export const Calendar = () => {
	const today = new Date();

	const { workoutSessions } = useContext(WorkoutSessionContext);

	const thisMonthSessions =
		workoutSessions.filter(isFromSameMonth(today)) ?? null;

	const lastMonthSessions = workoutSessions.filter(
		isFromSameMonth(new Date(today.getFullYear(), today.getMonth() - 1, 1))
	);

	const thisCalendarSessions = useMemo(() => {
		return makeCalendarWorkoutSessions({
			lastMonthSessions,
			thisMonthSessions,
		});
	}, [thisMonthSessions, lastMonthSessions]);

	return (
		<View style={{ paddingHorizontal: 16, minHeight: 240 }}>
			<Text style={{ ...globalStyles.pageTitle }}>
				{months[today.getMonth()]}
			</Text>
			<View style={{ padding: 14 }}>
				<View
					style={{
						flexDirection: "row",
					}}>
					{daysOfWeek.map((day) => {
						const name = day.substring(0, 3) + ".";
						return (
							<View
								style={{
									flex: 1,
									alignItems: "stretch",
									justifyContent: "center",
								}}
								key={name + "-view"}>
								<Text
									style={{
										...globalStyles.baseText,
										textAlign: "center",
									}}
									key={name}>
									{name}
								</Text>
							</View>
						);
					})}
				</View>
				<FlatList
					data={thisCalendarSessions}
					numColumns={7}
					getItemLayout={(_data, index) => ({
						index,
						length: 33,
						offset: 4,
					})}
					renderItem={(data) => (
						<DayButton
							workoutSession={data.item}
							key={data.index + "-daybtn"}
						/>
					)}
				/>
			</View>
		</View>
	);
};
