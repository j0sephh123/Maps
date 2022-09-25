import clsx from "clsx";
import { ReactNode } from "react";
import { useColorTheme } from "../../ColorThemeContextProvider";
import classes from "./Controls.module.css";

type Props = {
  resetHandler: () => void;
  children: ReactNode;
};

const Controls = ({ resetHandler, children }: Props) => {
  const { colorTheme } = useColorTheme();

  return (
    <div className={clsx(classes.controls, classes[colorTheme])}>
      <h3>{children}</h3>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Controls;
