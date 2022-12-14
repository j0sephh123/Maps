import { stateTitles } from "../data/stateTitles";
import { Action, AppInitialState } from "../types";
import { getRandomState } from "../utils/generators/generators";
import { LocalStorageApi } from "../utils/localStorage/localStorage";
import appInitialState from "./appInitialState";

export default function appReducer(
	state: AppInitialState,
	action: Action
): AppInitialState {
	if (action.type === "HANDLE_CLICK") {
		const isGuessCorrect =
			action.payload.title === state.askedState &&
			!state.activeStates.includes(action.payload.title);

		if (!isGuessCorrect) {
			return {
				...state,
				attempts: state.attempts + 1,
			};
		}

		const newActiveStates = [...state.activeStates, action.payload.title];

		LocalStorageApi.saveActiveStates(newActiveStates);

		return {
			...state,
			score: state.score + 1,
			activeStates: newActiveStates,
			askedState: getRandomState(newActiveStates),
			attempts: 0,
			suggestions: [],
		};
	}

	if (action.type === "RESET") {
		LocalStorageApi.resetActiveStates();
		return {
			...appInitialState,
			askedState: getRandomState(),
		};
	}

	if (action.type === "DEBUG_ANSWER_ALL") {
		LocalStorageApi.saveActiveStates(stateTitles);

		return {
			...state,
			activeStates: stateTitles,
			askedState: null,
			score: stateTitles.length,
			attempts: 0,
			suggestions: [],
		};
	}

	if (action.type === "LOAD_INITIAL_STATES_FROM_LS") {
		// if(state.activeStates.length)
		if (state.activeStates.length === 0) {
			const activeStatesFromLS = LocalStorageApi.readActiveStates();
			if (activeStatesFromLS.length > 0) {
				return {
					...state,
					activeStates: activeStatesFromLS,
					score: activeStatesFromLS.length,
					askedState: getRandomState(activeStatesFromLS),
				};
			}
		}
	}

	if (action.type === "SHOW_SUGGESTION") {
		if (!state.askedState) {
			return state;
		}

		const remainingWithoutAskedState = state.activeStates.filter(
			(activeState) => activeState !== state.askedState
		);

		// TODO create a function to generate more than one random state
		const firstRandomState = getRandomState(remainingWithoutAskedState);
		const secondRandomState = getRandomState(
			remainingWithoutAskedState.filter((item) => item !== firstRandomState)
		);

		return {
			...state,
			attempts: 0,
			suggestions: [state.askedState, firstRandomState, secondRandomState],
		};
	}

	return state;
}
