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
    const newActiveStates = [...state.activeStates, action.title];

    LocalStorageApi.saveActiveStates(newActiveStates);

    return {
      ...state,
      score: state.score + 1,
      activeStates: newActiveStates,
      askedState: getRandomState(newActiveStates),
    };
  }

  if (action.type === "RESET") {
    LocalStorageApi.resetActiveStates();
    return { ...appInitialState, askedState: getRandomState() };
  }

  if (action.type === "DEBUG_ANSWER_ALL") {
    LocalStorageApi.saveActiveStates(stateTitles);

    return {
      ...state,
      activeStates: stateTitles,
      askedState: null,
      score: stateTitles.length,
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

  return state;
}
