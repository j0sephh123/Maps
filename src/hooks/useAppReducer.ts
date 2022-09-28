import { useReducer } from "react";
import appInitialState from "../app/appInitialState";
import appReducer from "../app/appReducer";

export default function useAppReducer() {
  const [appState, dispatch] = useReducer(appReducer, appInitialState);

  console.log({
    appState,
  });

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

  return {
    appState,
    handleClick,
    reset,
    debugAnswerAll,
  };
}
