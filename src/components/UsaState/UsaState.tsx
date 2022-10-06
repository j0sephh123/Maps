import clsx from "clsx";
import classes from "./UsaState.module.css";

export type Coords = {
	title: string;
	left: number;
	top: number;
	index?: number;
};

type Props = {
	onClick: () => void;
	d: string;
	isActive: boolean;
	isSuggested: boolean;
	title: string;
	getCoords: (coords: Coords) => void;
};

const UsaState = ({
	getCoords,
	title,
	onClick,
	d,
	isActive,
	isSuggested,
}: Props) => {
	return (
		<path
			ref={(e) => {
				if (!e) {
					return null;
				}

				const { left, top, right, bottom } = e.getBoundingClientRect();

				getCoords({
					title,
					left: (left + right) / 2,
					top: (top + bottom) / 2,
				});
			}}
			className={clsx(
				isActive && classes.isActive,
				isSuggested && classes.isSuggested
			)}
			onClick={onClick}
			d={d}
		/>
	);
};

export default UsaState;
