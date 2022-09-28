import { AppInitialState, APP_INITIAL_STATE_KEYS } from "../../types";

const defaultActiveStatesResult = "[]";

export class LocalStorageApi {
  private static readActiveState() {
    const getItemResult =
      localStorage.getItem(APP_INITIAL_STATE_KEYS.activeStates) ??
      defaultActiveStatesResult;

    return JSON.parse(getItemResult) as string[];
  }

  public static saveActiveStates(
    newActiveStates: AppInitialState["activeStates"]
  ) {
    localStorage.setItem(
      APP_INITIAL_STATE_KEYS.activeStates,
      JSON.stringify(newActiveStates)
    );
  }

  public static resetActiveStates() {
    localStorage.setItem(
      APP_INITIAL_STATE_KEYS.activeStates,
      defaultActiveStatesResult
    );
  }
}
