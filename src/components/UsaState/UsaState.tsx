import clsx from "clsx";
import classes from "./UsaState.module.css";

type Props = {
	onClick: () => void;
	d: string;
	isActive: boolean;
	isSuggested: boolean;
	title: string;
};

const UsaState = ({ title, onClick, d, isActive, isSuggested }: Props) => {
	return (
		<path
			id={title}
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
