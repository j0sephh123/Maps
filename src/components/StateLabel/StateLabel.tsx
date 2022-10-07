import clsx from "clsx";
import { stateCoordinates } from "../../data/stateCoordinates";
import type { StateLabelType } from "../../types";
import classes from "./StateLabel.module.css";

// TODO create a wrapper for that so we don't import stateCoordinates in every child
const StateLabel = ({
	left: leftCoordinate,
	title,
	top: topCoordinate,
	index,
}: StateLabelType) => {
	const { left, top } = stateCoordinates[index ?? 0];
	const leftCoordinateF = leftCoordinate + left;
	const topCoordinateF = topCoordinate + top;

	return (
		<span
			className={clsx(
				classes.stateLabel,
				title === "Vermont" && classes.Vermont,
				title === "Delaware" && classes.Delaware,
				title === "New Jersey" && classes.NewJersey,
				title === "Connecticut" && classes.Connecticut,
				title === "New Hampshire" && classes.NewHampshire,
				title === "Rhode Island" && classes.RhodeIsland,
				title === "Massachusetts" && classes.Massachusetts
			)}
			style={{
				left: leftCoordinateF,
				top: topCoordinateF,
			}}
			key={title}
		>
			{title}
		</span>
	);
};

export default StateLabel;
