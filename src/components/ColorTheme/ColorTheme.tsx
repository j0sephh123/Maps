import clsx from "clsx";
import { useColorTheme } from "../../providers/ColorThemeContextProvider";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import classes from "./ColorTheme.module.css";

export default function ColorTheme({ children }: any) {
	const { colorTheme, setColorTheme } = useColorTheme();

	return (
		<div className={clsx(classes.controls, classes[colorTheme])}>
			{colorTheme === "dark" && (
				<Sun colorTheme={colorTheme} onClick={() => setColorTheme("light")} />
			)}

			{colorTheme === "light" && (
				<Moon colorTheme={colorTheme} onClick={() => setColorTheme("dark")} />
			)}

			{children}
		</div>
	);
}
