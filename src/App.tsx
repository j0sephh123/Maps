import { Map, UsaState, Controls } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import useAppReducer from "./hooks/useAppReducer";
import "./index.css";
import { useColorTheme } from "./ColorThemeContextProvider";
import Sun from "./components/icons/Sun";
import Moon from "./components/icons/Moon";

function App() {
  const {
    appState: { activeStates, askedState, score },
    handleClick,
    reset,
  } = useAppReducer();

  const { colorTheme, setColorTheme } = useColorTheme();

  // TODO refactor how icons are handled
  return (
    <div className={`${colorTheme} container`}>
      {colorTheme === "dark" && (
        <Sun colorTheme={colorTheme} onClick={() => setColorTheme("light")} />
      )}

      {colorTheme === "light" && (
        <Moon colorTheme={colorTheme} onClick={() => setColorTheme("dark")} />
      )}

      <Controls
        resetHandler={reset}
      >{`${score}/${stateTitles.length} ${askedState}`}</Controls>

      <Map>
        {stateTitles.map((title, index) => {
          const isUsaStatedGuessed = activeStates.includes(title);
          const isGuessed = title === askedState && !isUsaStatedGuessed;

          return (
            <UsaState
              key={title}
              isActive={isUsaStatedGuessed}
              onClick={() => isGuessed && handleClick(title)}
              d={svgPaths[index]}
            />
          );
        })}
      </Map>
    </div>
  );
}

export default App;
