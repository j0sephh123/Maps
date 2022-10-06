export type AppInitialState = {
	askedState: string | null;
	score: number;
	activeStates: string[];
	attempts: number;
	suggestions: string[];
};

export enum APP_INITIAL_STATE_KEYS {
	askedState = "askedState",
	score = "score",
	activeStates = "activeStates",
}

export type Action =
	| { type: "HANDLE_CLICK"; payload: { title: string } }
	| { type: "RESET" }
	| { type: "DEBUG_ANSWER_ALL" }
	| { type: "LOAD_INITIAL_STATES_FROM_LS" }
	| { type: "SHOW_SUGGESTION" };
