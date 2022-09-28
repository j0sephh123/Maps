import { useColorTheme } from "../../providers/ColorThemeContextProvider";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

export default function ColorTheme() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <>
      {colorTheme === "dark" && (
        <Sun colorTheme={colorTheme} onClick={() => setColorTheme("light")} />
      )}

      {colorTheme === "light" && (
        <Moon colorTheme={colorTheme} onClick={() => setColorTheme("dark")} />
      )}
    </>
  );
}
