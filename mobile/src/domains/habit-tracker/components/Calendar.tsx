import { FlatList, Text, View } from "react-native";
import { globalStyles } from "../../../styles/globalStyles";
import { useRef } from "react";
import { DayButton, DayButtonProps } from "./DayButton";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const daysOfWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

const daysInMonth = (month: number, year: number) => {
	return new Date(year, month, 0).getDate();
};

export const Calendar = () => {
	const todayRef = useRef<Date>(new Date());

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
					data={flatListMockData}
					numColumns={7}
					getItemLayout={(data, index) => ({
						index,
						length: 33,
						offset: 4,
					})}
					renderItem={(data) => (
						<DayButton
							{...data.item}
							key={data.index + "-daybtn"}
						/>
					)}
				/>
				{/* calendar */}
			</View>
		</View>
	);
};

let day = 0;
const flatListMockData: DayButtonProps[] = [
	{ date: new Date(2023, 1, day - 2), isDisabled: true },
	{ date: new Date(2023, 1, day - 1), isDisabled: true },
	{ date: new Date(2023, 1, day), isDisabled: true },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false, isSelected: true },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false, isSelected: true },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false },
	{ date: new Date(2023, 1, ++day), isDisabled: false, isSelected: true },
	{ date: new Date(2023, 1, ++day), isDisabled: false, isSelected: true },
];
