import { ReactNode } from "react";
import classes from "./Map.module.css";

type Props = {
  children: ReactNode
}

const Map = ({ children }: Props) => {
  return (
    <svg
      viewBox="200 0 1400 1400"
      width="1300"
      height="1300"
      className={classes.map}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g>{children}</g>
    </svg>
  );
};

export default Map;
