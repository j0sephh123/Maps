export enum APP_INITIAL_STATE_KEYS {
  askedState = "askedState",
  score = "score",
  activeStates = "activeStates",
}

export type AppInitialState = {
  [APP_INITIAL_STATE_KEYS.askedState]: string | null;
  [APP_INITIAL_STATE_KEYS.score]: number;
  [APP_INITIAL_STATE_KEYS.activeStates]: string[];
};

export type Action =
  | { type: "HANDLE_CLICK"; title: string }
  | { type: "RESET" }
  | { type: "DEBUG_ANSWER_ALL" }
  | { type: "LOAD_INITIAL_STATES_FROM_LS" };
