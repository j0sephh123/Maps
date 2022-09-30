export type Suggestion = {
  currentWrongAttempts: number;
  suggestedStates: string[];
};

export type AppInitialState = {
  askedState: string | null;
  score: number;
  activeStates: string[];
  suggestion: Suggestion;
};

export enum APP_INITIAL_STATE_KEYS {
  askedState = "askedState",
  score = "score",
  activeStates = "activeStates",
  suggestion = "suggestion",
}

export type Action =
  | { type: "HANDLE_CLICK"; payload: { title: string } }
  | { type: "RESET" }
  | { type: "DEBUG_ANSWER_ALL" }
  | { type: "LOAD_INITIAL_STATES_FROM_LS" }
  | { type: "SHOW_SUGGESTION" };
