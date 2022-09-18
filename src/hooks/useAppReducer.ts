import { useReducer } from "react";
import appReducer, { appInitialState } from "../store/appReducer";

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

  return {
    appState,
    handleClick,
    reset,
  };
}
