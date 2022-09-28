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

  return state;
}
