import clsx from "clsx";
import { useCallback, useEffect } from "react";
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
    appState: {
      activeStates,
      askedState,
      score,
      suggestion: { currentWrongAttempts, suggestedStates },
    },
    handleClick,
    reset,
    debugAnswerAll,
    loadInitialStatesFromLS,
    showSuggestion,
  } = useAppReducer();

  const { colorTheme } = useColorTheme();

  const loadInitialStates = useCallback(() => loadInitialStatesFromLS(), []);

  useEffect(() => {
    loadInitialStates();
  }, [loadInitialStates]);

  useEffect(() => {
    if (currentWrongAttempts === 3) {
      showSuggestion();
    }
  }, [currentWrongAttempts]);

  return (
    <>
      <ColorTheme />
      <div className={clsx(classes.controls, classes[colorTheme])}>
        <h2>{`${score}/${stateTitles.length}`}</h2>
        <button onClick={debugAnswerAll}>Answer All</button>
        <button onClick={reset}>Reset</button>
        <h3>{askedState}</h3>
        <button
          onClick={showSuggestion}
        >
          Suggest
        </button>
      </div>
      <Map>
        {stateTitles.map((title, index) => (
          <UsaState
            isSuggested={suggestedStates.includes(title)}
            key={title}
            isActive={activeStates.includes(title)}
            onClick={() => handleClick(title)}
            d={svgPaths[index]}
          />
        ))}
      </Map>
    </>
  );
}

export default App;
