import { stateTitles } from "../data/stateTitles";

const excludeStringFromArray = (string: string, array: string[]) =>
  !array.includes(string);

const getRandomFromArray = (array: any[]) =>
  Math.floor(Math.random() * array.length);

export const getRandomState = (excludeList?: string[]) => {
  const randomStateIndex = getRandomFromArray(stateTitles);

  if (excludeList) {
    return stateTitles.filter((stateTitle) =>
      excludeStringFromArray(stateTitle, excludeList)
    )[randomStateIndex];
  }

  return stateTitles[randomStateIndex];
};
