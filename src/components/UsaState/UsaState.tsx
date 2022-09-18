import clsx from "clsx";
import classes from "./UsaState.module.css";

type Props = {
  onClick: any;
  d: string;
  isActive: boolean;
};

const UsaState = ({ onClick, d, isActive }: Props) => {
  return (
    <path
      className={clsx(isActive && classes.isActive)}
      onClick={onClick}
      d={d}
    />
  );
};

export default UsaState;
