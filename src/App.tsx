import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { Map, UsaState, Header } from "./components";
import svgPaths from "./data/svgPaths";
import { stateTitles } from "./data/stateTitles";
import "./index.css";
import appInitialState from "./app/appInitialState";
import appReducer from "./app/appReducer";
import { MAX_ATTEMPTS } from "./utils/constants";
import { Coords } from "./components/UsaState/UsaState";
import { stateCoordinates } from "./data/stateCoordinates";
import classes from "./App.module.css";
import clsx from "clsx";

function App() {
	const [{ activeStates, askedState, score, attempts, suggestions }, dispatch] =
		useReducer(appReducer, appInitialState);
	const coordsRef = useRef<Coords[]>([]);
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

	const getCoords = (coords: Coords, index: number) => {
		if (coordsRef.current.find(({ title }) => title === coords.title)) {
			return;
		}
		coordsRef.current?.push({ ...coords, index });
	};

	useEffect(() => {
		if (!areCoordsLoaded && coordsRef.current.length === stateTitles.length) {
			setAreCoordsLoaded(true);
		}
	}, [coordsRef.current.length]);

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

			{coordsRef.current.map((el) => {
				const index = el.index ? el.index : 0;
				const { left, top } = stateCoordinates[index] || {
					left: 0,
					top: 0,
				};

				console.log(el.title);

				return (
					<span
						className={clsx(el.title === "Vermont" && classes.Vermont)}
						style={{
							color: "white",
							position: "absolute",
							left: el.left + left,
							top: el.top + top,
							fontSize: 12,
						}}
						key={el.title}
					>
						{el.title}
					</span>
				);
			})}

			<Map>
				{stateTitles.map((title, index) => (
					<UsaState
						getCoords={(coords) => getCoords(coords, index)}
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
