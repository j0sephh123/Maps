import clsx from "clsx";
import { PropsWithChildren } from "react";
import { useColorTheme } from "../../providers/ColorThemeContextProvider";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import classes from "./Header.module.css";

export default function Header({ children }: PropsWithChildren) {
	const { colorTheme, setColorTheme } = useColorTheme();

	return (
		<div className={clsx(classes.header, classes[colorTheme])}>
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
