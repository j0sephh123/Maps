import {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
	PropsWithChildren
} from "react";

type ColorThemes = "light" | "dark";
type Context = {
	colorTheme: ColorThemes;
	setColorTheme: Dispatch<SetStateAction<ColorThemes>>;
};

const ColorThemeContext = createContext<Context>({
	colorTheme: "dark",
	setColorTheme: () => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);

const ContextProvider = ({ children }: PropsWithChildren) => {
	const [colorTheme, setColorTheme] = useState<ColorThemes>("dark");

	return (
		<ColorThemeContext.Provider
			value={{
				colorTheme,
				setColorTheme,
			}}
		>
			<div className={`${colorTheme} container`}>{children}</div>
		</ColorThemeContext.Provider>
	);
};

export default ContextProvider;
