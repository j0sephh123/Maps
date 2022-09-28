import { stateTitles } from "../data/stateTitles";
import { getRandomState } from "../utils/generators/generators";

export type AppInitialState = {
  askedState: string | null;
  score: number;
  activeStates: string[];
};

export const appInitialState: AppInitialState = {
  activeStates: [],
  score: 0,
  askedState: getRandomState(),
};

export type ResetPayload = {
  title: string;
};

type Action =
  | { type: "HANDLE_CLICK"; title: string }
  | { type: "RESET" }
  | { type: "DEBUG_ANSWER_ALL" };

export default function appReducer(
  state: AppInitialState,
  action: Action
): AppInitialState {
  if (action.type === "HANDLE_CLICK") {
    return {
      ...state,
      score: state.score + 1,
      activeStates: [...state.activeStates, action.title],
      askedState: getRandomState([...state.activeStates, action.title]),
    };
  }

  if (action.type === "RESET") {
    return { ...appInitialState, askedState: getRandomState() };
  }

  if (action.type === "DEBUG_ANSWER_ALL") {
    return {
      ...state,
      activeStates: stateTitles,
      askedState: null,
      score: stateTitles.length,
    };
  }

  return state;
}
