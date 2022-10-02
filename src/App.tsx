import { useCallback, useEffect, useReducer } from "react";
import { Map, UsaState, Header } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import "./index.css";
import appInitialState from "./app/appInitialState";
import appReducer from "./app/appReducer";

function App() {
	const [
		{
			activeStates,
			askedState,
			score,
			suggestion: { currentWrongAttempts, suggestedStates },
		},
		dispatch,
	] = useReducer(appReducer, appInitialState);

	const showSuggestion = () => dispatch({ type: "SHOW_SUGGESTION" });

	const loadInitialStates = useCallback(
		() => dispatch({ type: "LOAD_INITIAL_STATES_FROM_LS" }),
		[]
	);

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
			<Header>
				<h2>{`${score}/${stateTitles.length}`}</h2>
				<button onClick={() => dispatch({ type: "DEBUG_ANSWER_ALL" })}>
					Answer All
				</button>
				<button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
				<h3>{askedState}</h3>
				<button onClick={showSuggestion}>Suggest</button>
			</Header>

			<Map>
				{stateTitles.map((title, index) => (
					<UsaState
						isSuggested={suggestedStates.includes(title)}
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
