export const formatTime = (totalMiliSeconds: number) => {
	const minutes = Math.floor(totalMiliSeconds / 60000);
	const seconds = Math.floor((totalMiliSeconds % 60000) / 1000);
	const ms = ((totalMiliSeconds % 60000) % 1000) / 100;
	const formattedMinutes = `${minutes < 10 ? "0" : ""}${minutes}`;
	const formattedSeconds = `${seconds < 10 ? "0" : ""}${seconds}`;
	const formattedMs = `${ms}`;
	return [formattedMinutes, formattedSeconds, formattedMs];
};
