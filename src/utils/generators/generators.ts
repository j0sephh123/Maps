import { stateTitles } from "../../data/stateTitles";

export const excludeStringFromArray = (string: string, array: string[]) =>
  !array.includes(string);

export const getRandomIndexFromArray = (array: any[]) =>
  Math.floor(Math.random() * array.length);

export const getRandomState = (excludeList?: string[]) => {
  const randomStateIndex = getRandomIndexFromArray(stateTitles);

  if (excludeList) {
    return stateTitles.filter((stateTitle) =>
      excludeStringFromArray(stateTitle, excludeList)
    )[randomStateIndex];
  }

  return stateTitles[randomStateIndex];
};
