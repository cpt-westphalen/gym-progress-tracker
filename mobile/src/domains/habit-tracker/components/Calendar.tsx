import { FlatList, Text, View } from "react-native";
import { useContext, useMemo, useRef } from "react";

import { WorkoutSessionContext } from "../../../contexts/workoutSessionsContext/WorkoutSessionsContext";

import { DayButton } from "./DayButton";

import { makeCalendarWorkoutSessions } from "../services/makeCalendarWorkoutSessions";

import { months, daysOfWeek } from "../utils/calendarNames";

import { globalStyles } from "../../../styles/globalStyles";

export const Calendar = () => {
	const todayRef = useRef(new Date());

	const { workoutSessions } = useContext(WorkoutSessionContext);

	const thisMonth = todayRef.current.getMonth();
	const thisMonthSessions = workoutSessions.currentYear[thisMonth];
	const lastMonthSessions =
		thisMonth !== 0
			? workoutSessions.currentYear[thisMonth - 1]
			: workoutSessions.lastYear?.[11] || null;

	const thisCalendarSessions = useMemo(() => {
		return makeCalendarWorkoutSessions({
			todayRef: todayRef,
			lastMonthSessions,
			thisMonthSessions,
		});
	}, [todayRef, thisMonthSessions, lastMonthSessions]);

	/*
	const startingWeekDay = useMemo(
		() =>
			new Date(
				todayRef.current.getFullYear(),
				todayRef.current.getMonth(),
				1
			).getDay(),
		[todayRef.current.getMonth()]
	); // sunday == 0

	const monthDays = useMemo(
		() =>
			daysInMonth(
				todayRef.current.getMonth(),
				todayRef.current.getFullYear()
			),
		[todayRef.current]
	);
	// continue
	const calendarDays: JSX.Element[] = useMemo(() => {
		return (new Array(35).fill(null) as JSX.Element[]).map(
			(item, index) => (
				<View key={index + "-view"}>
					<Text
						key={index}
						style={globalStyles.baseText}>
						{index}
					</Text>
				</View>
			)
		);
	}, [selectedDays, monthDays, startingWeekDay, todayRef.current]);
	*/

	return (
		<View style={{ paddingHorizontal: 6, minHeight: 240 }}>
			<Text style={globalStyles.pageTitle}>
				{months[todayRef.current.getMonth()]}
			</Text>
			<View style={{ paddingHorizontal: 14 }}>
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
