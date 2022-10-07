export type AppInitialState = {
	askedState: string | null;
	score: number;
	activeStates: string[];
	attempts: number;
	suggestions: string[];
	showLabelStates: boolean;
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

type Tuple<T, N extends number> = N extends N
	? number extends N
		? T[]
		: _TupleOf<T, N, []>
	: never;
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
	? R
	: _TupleOf<T, N, [T, ...R]>;

export type StateTitles = Tuple<StateTitle, 50>;
export type StateCoordinates = Tuple<StateLabelType, 50>;

export type StateLabelType = {
	title: StateTitle;
	left: number;
	top: number;
	index?: number;
};

export type StateTitle =
	| "Alaska"
	| "Alabama"
	| "Arkansas"
	| "Arizona"
	| "California"
	| "Colorado"
	| "Connecticut"
	| "Delaware"
	| "Florida"
	| "Georgia"
	| "Hawaii"
	| "Iowa"
	| "Idaho"
	| "Illinois"
	| "Indiana"
	| "Kansas"
	| "Kentucky"
	| "Louisiana"
	| "Massachusetts"
	| "Maryland"
	| "Maine"
	| "Michigan"
	| "Minnesota"
	| "Missouri"
	| "Mississippi"
	| "Montana"
	| "North Carolina"
	| "North Dakota"
	| "Nebraska"
	| "New Hampshire"
	| "New Jersey"
	| "New Mexico"
	| "Nevada"
	| "New York"
	| "Ohio"
	| "Oklahoma"
	| "Oregon"
	| "Pennsylvania"
	| "Rhode Island"
	| "South Carolina"
	| "South Dakota"
	| "Tennessee"
	| "Texas"
	| "Utah"
	| "Virginia"
	| "Vermont"
	| "Washington"
	| "Wisconsin"
	| "West Virginia"
	| "Wyoming";
