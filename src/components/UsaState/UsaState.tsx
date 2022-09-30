import clsx from "clsx";
import classes from "./UsaState.module.css";

type Props = {
	onClick: any;
	d: string;
	isActive: boolean;
	isSuggested: boolean;
};

const UsaState = ({ onClick, d, isActive, isSuggested }: Props) => {
	return (
		<path
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
