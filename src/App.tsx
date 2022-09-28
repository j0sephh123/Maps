import clsx from "clsx";
import { useEffect } from "react";
import { Map, UsaState } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import useAppReducer from "./hooks/useAppReducer";
import "./index.css";
import classes from "./App.module.css";
import ColorTheme from "./components/ColorTheme/ColorTheme";
import { useColorTheme } from "./providers/ColorThemeContextProvider";

function App() {
  const {
    appState: { activeStates, askedState, score },
    handleClick,
    reset,
    debugAnswerAll,
    loadInitialStatesFromLS,
  } = useAppReducer();

  const { colorTheme } = useColorTheme();

  useEffect(() => {
    loadInitialStatesFromLS();
  }, [loadInitialStatesFromLS]);

  return (
    <>
      <ColorTheme />
      <div className={clsx(classes.controls, classes[colorTheme])}>
        <h2>{`${score}/${stateTitles.length}`}</h2>
        <button onClick={debugAnswerAll}>Answer All</button>
        <button onClick={reset}>Reset</button>
        <h3>{askedState}</h3>
      </div>
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
    </>
  );
}

export default App;
