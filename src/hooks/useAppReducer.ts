import { useReducer } from "react";
import appInitialState from "../app/appInitialState";
import appReducer from "../app/appReducer";
import { Suggestion } from "../types";

export default function useAppReducer() {
  const [appState, dispatch] = useReducer(appReducer, appInitialState);

  const handleClick = (title: string) =>
    dispatch({
      type: "HANDLE_CLICK",
      title,
    });

  const reset = () =>
    dispatch({
      type: "RESET",
    });

  const debugAnswerAll = () => {
    dispatch({ type: "DEBUG_ANSWER_ALL" });
  };

  const loadInitialStatesFromLS = () => {
    dispatch({ type: "LOAD_INITIAL_STATES_FROM_LS" });
  };

  const showSuggestion = () => {
    dispatch({ type: "SHOW_SUGGESTION" });
  };

  return {
    appState,
    handleClick,
    reset,
    debugAnswerAll,
    loadInitialStatesFromLS,
    showSuggestion,
  };
}
