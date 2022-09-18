import { Map, UsaState, Controls } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import useAppReducer from "./hooks/useAppReducer";

function App() {
  const {
    appState: { activeStates, askedState, score },
    handleClick,
    reset,
  } = useAppReducer();

  return (
    <>
      <Controls
        resetHandler={reset}
      >{`${score}/${stateTitles.length} ${askedState}`}</Controls>

      <Map>
        {stateTitles.map((title, index) => {
          const isGuessed =
            title === askedState && !activeStates.includes(title);

          return (
            <UsaState
              key={title}
              isActive={activeStates.includes(title)}
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
