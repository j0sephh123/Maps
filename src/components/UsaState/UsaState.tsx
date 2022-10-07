import clsx from "clsx";
import { StateLabelType, StateTitle } from "../../types";
import classes from "./UsaState.module.css";

type Props = {
	onClick: () => void;
	d: string;
	isActive: boolean;
	isSuggested: boolean;
	title: StateTitle;
	getStateLabelsCoords: (coords: StateLabelType) => void;
};

const UsaState = ({
	getStateLabelsCoords,
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

				getStateLabelsCoords({
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
