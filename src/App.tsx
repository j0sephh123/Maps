import { Map, UsaState, Controls } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import useAppReducer from "./hooks/useAppReducer";
import "./index.css";
import ColorTheme from "./components/ColorTheme/ColorTheme";

function App() {
  const {
    appState: { activeStates, askedState, score },
    handleClick,
    reset,
  } = useAppReducer();

  return (
    <>
      <ColorTheme />
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
    </>
  );
}

export default App;
