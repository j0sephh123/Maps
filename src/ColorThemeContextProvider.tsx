import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type ColorThemes = "light" | "dark";
type Context = {
  colorTheme: ColorThemes;
  setColorTheme: Dispatch<SetStateAction<ColorThemes>>;
};

const ColorThemeContext = createContext<Context>({
  colorTheme: "light",
  setColorTheme: () => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);

const ContextProvider = ({ children }: any) => {
  const [colorTheme, setColorTheme] = useState<ColorThemes>("light");

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
