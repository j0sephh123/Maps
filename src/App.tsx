import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Map, UsaState, Header } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import "./index.css";
import appInitialState from "./app/appInitialState";
import appReducer from "./app/appReducer";
import { MAX_ATTEMPTS } from "./utils/constants";
import type { StateLabelType } from "./types";
import StateLabel from "./components/StateLabel/StateLabel";

function App() {
	const [
		{ activeStates, askedState, score, attempts, suggestions, showLabelStates },
		dispatch,
	] = useReducer(appReducer, appInitialState);
	const { current: stateLabelTypes } = useRef<StateLabelType[]>([]);
	const [areCoordsLoaded, setAreCoordsLoaded] = useState(false);

	const showSuggestion = () => dispatch({ type: "SHOW_SUGGESTION" });

	const loadInitialStates = useCallback(
		() => dispatch({ type: "LOAD_INITIAL_STATES_FROM_LS" }),
		[]
	);

	useEffect(() => {
		loadInitialStates();
	}, [loadInitialStates]);

	useEffect(() => {
		if (attempts === MAX_ATTEMPTS) {
			showSuggestion();
		}
	}, [attempts]);

	const getStateLabelsCoords = (coords: StateLabelType, index: number) =>
		showLabelStates &&
		!stateLabelTypes.find(({ title }) => title === coords.title) &&
		stateLabelTypes?.push({ ...coords, index });

	useEffect(() => {
		if (!areCoordsLoaded && stateLabelTypes.length === stateTitles.length) {
			setAreCoordsLoaded(true);
		}
	}, [stateLabelTypes.length]);

	return (
		<>
			<Header>
				<h2>{`${score}/${stateTitles.length}`}</h2>
				<button onClick={() => dispatch({ type: "DEBUG_ANSWER_ALL" })}>
					Answer All
				</button>
				<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
				<h3>{askedState}</h3>
				<button onClick={showSuggestion}>Suggest</button>
			</Header>

			{showLabelStates &&
				stateLabelTypes.map((stateLabel) => (
					<StateLabel key={stateLabel.title} {...stateLabel} />
				))}

			<Map>
				{stateTitles.map((title, index) => (
					<UsaState
						getStateLabelsCoords={(coords) =>
							getStateLabelsCoords(coords, index)
						}
						title={title}
						isSuggested={suggestions.includes(title)}
						key={title}
						isActive={activeStates.includes(title)}
						onClick={() =>
							dispatch({
								type: "HANDLE_CLICK",
								payload: { title },
							})
						}
						d={svgPaths[index]}
					/>
				))}
			</Map>
		</>
	);
}

export default App;
