import { AppInitialState } from "../types";
import { getRandomState } from "../utils/generators/generators";

export const appInitialState: AppInitialState = {
  activeStates: [],
  score: 0,
  askedState: getRandomState(),
  suggestion: {
    // numberOfStates: 1,
    // wrongAttemptsThreshold: 3,
    currentWrongAttempts: 0,
    suggestedStates: [],
  },
};

export default appInitialState;
