import clsx from "clsx";
import classes from "./icon.module.css";
import Wrapper from "./Wrapper";

const Sun = ({ onClick, colorTheme }: any) => {
  return (
    <Wrapper
      className={clsx(classes.icon, classes[colorTheme])}
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </Wrapper>
  );
};

export default Sun;
