import { WorkoutSession } from "../entities/WorkoutSession";

type MakeCalendarWorkoutSessionsProps = {
	todayRef: React.MutableRefObject<Date>;
	lastMonthSessions: (WorkoutSession | null)[] | null;
	thisMonthSessions: (WorkoutSession | null)[] | null;
};
export function makeCalendarWorkoutSessions({
	todayRef,
	lastMonthSessions,
	thisMonthSessions,
}: MakeCalendarWorkoutSessionsProps) {
	const thisYear = todayRef.current.getFullYear();
	const thisMonth = todayRef.current.getMonth();

	const startingWeekDayOffset = new Date(thisYear, thisMonth, 1).getDay();
	const endOfMonthOffset =
		35 -
		new Date(thisYear, thisMonth + 1, 0).getDate() -
		startingWeekDayOffset;
	// this factories the necessary (and variable) sessions that show on the days before thisMonth 1st (if any)
	const beforeThisMonthSlots: null[] = new Array(startingWeekDayOffset).fill(
		null
	);
	const beforeThisMonthWorkoutSessions: WorkoutSession[] =
		beforeThisMonthSlots.map((_slot, index) => {
			const nullWorkoutSessionProps = {
				date: new Date(),
				details: null,
				userId: null,
				workout: null,
			};
			if (lastMonthSessions == null)
				return new WorkoutSession({
					...nullWorkoutSessionProps,
					date: new Date(
						thisYear,
						thisMonth,
						0 - (startingWeekDayOffset - index)
					),
				});
			const daySession =
				lastMonthSessions[
					lastMonthSessions.length - startingWeekDayOffset + index
				]; // so it counts backwards, index 0 = 'nth' before last

			if (daySession == null) {
				return new WorkoutSession({
					...nullWorkoutSessionProps,
					date: new Date(
						thisYear,
						thisMonth,
						0 - (startingWeekDayOffset - index)
					),
				});
			}

			return new WorkoutSession({
				date: daySession.date,
				details: daySession.details,
				userId: daySession.userId,
				workout: daySession.workout,
			});
		});
	// this factories thisMonths WorkoutSessions
	const thisMonthSlots: null[] = new Array(
		new Date(thisYear, thisMonth + 1, 0).getDate()
	).fill(null);
	const thisMonthWorkoutSessions: WorkoutSession[] = thisMonthSlots.map(
		(_slot, index) => {
			if (thisMonthSessions == null) {
				return new WorkoutSession({
					date: new Date(thisYear, thisMonth, index + 1),
					details: null,
					userId: null,
					workout: null,
				});
			}
			const daySession = thisMonthSessions[index];
			if (daySession == null) {
				return new WorkoutSession({
					date: new Date(thisYear, thisMonth, index + 1),
					details: null,
					userId: null,
					workout: null,
				});
			}
			return new WorkoutSession({
				date: daySession.date,
				details: daySession.details,
				userId: daySession.userId,
				workout: daySession.workout,
			});
		}
	);

	// this factories the necessary (and variable) sessions that show on the days after thisMonth last day (if any)
	// TODO nextMonthWorkoutSessions SHOULD carry info of registries after the calendar's month, in case we want the calendar to be changeable forwards and backwards.
	const afterThisMonthSlots: null[] = new Array(endOfMonthOffset).fill(null);
	const afterThisMonthWorkoutSessions: WorkoutSession[] =
		afterThisMonthSlots.map((_slot, index) => {
			return new WorkoutSession({
				date: new Date(thisYear, thisMonth + 1, index + 1),
				details: null,
				userId: null,
				workout: null,
			});
		});

	return beforeThisMonthWorkoutSessions.concat(
		thisMonthWorkoutSessions,
		afterThisMonthWorkoutSessions
	);
}
