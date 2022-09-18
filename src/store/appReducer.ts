import { getRandomState } from "../utils/generators";

export type AppInitialState = {
  askedState: string;
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

type Action = { type: "HANDLE_CLICK"; title: string } | { type: "RESET" };

export default function appReducer(state: AppInitialState, action: Action) {
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

  return state;
}
