import { useState } from "react";
import Map from "./components/Map/Map";
import State from "./components/State/State";

import { getRandomState } from "./utils/generators";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import Controls from "./components/Controls/Controls";

const defaultActiveStates: string[] = [];
const defaultAskedState = () => getRandomState();
const defaultScore = 0;

function App() {
  const [askedState, setAskedState] = useState<string | null>(
    defaultAskedState()
  );
  const [score, setScore] = useState(defaultScore);
  const [activeStates, setActiveStates] =
    useState<string[]>(defaultActiveStates);

  const stateClickHandler = (title: string) => {
    setScore(score + 1);
    setActiveStates([...activeStates, title]);
    setAskedState(getRandomState([...activeStates, title]));
  };

  const setDefaults = () => {
    setAskedState(defaultAskedState);
    setScore(defaultScore);
    setActiveStates(defaultActiveStates);
  };

  return (
    <div>
      <Controls
        resetHandler={setDefaults}
      >{`${score}/${stateTitles.length} ${askedState}`}</Controls>

      <Map>
        {stateTitles.map((title, index) => {
          const isGuessed =
            title === askedState && !activeStates.includes(title);

          return (
            <State
              key={title}
              isActive={activeStates.includes(title)}
              onClick={() => isGuessed && stateClickHandler(title)}
              d={svgPaths[index]}
            />
          );
        })}
      </Map>
    </div>
  );
}

export default App;
