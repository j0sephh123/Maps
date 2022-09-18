import { ReactNode } from "react";
import classes from "./Controls.module.css";

type Props = {
  resetHandler: () => void;
  children: ReactNode;
};

const Controls = ({ resetHandler, children }: Props) => {
  return (
    <div className={classes.controls}>
      <h3>{children}</h3>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Controls;
