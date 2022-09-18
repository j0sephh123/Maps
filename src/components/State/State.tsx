import clsx from "clsx";
import classes from "./State.module.css";

const State = ({
  onClick,
  d,
  isActive,
}: {
  onClick: any;
  d: string;
  isActive: boolean;
}) => {
  return (
    <path
      className={clsx(isActive && classes.isActive)}
      onClick={onClick}
      d={d}
    />
  );
};

export default State;
