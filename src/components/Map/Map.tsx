import { PropsWithChildren } from "react";
import { useColorTheme } from "../../providers/ColorThemeContextProvider";
import classes from "./Map.module.css";

const Map = ({ children }: PropsWithChildren) => {
	const { colorTheme } = useColorTheme();

	return (
		<svg
			viewBox="200 0 1400 1400"
			width="1300"
			height="1300"
			className={classes[colorTheme]}
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
		>
			<g>{children}</g>
		</svg>
	);
};

export default Map;
