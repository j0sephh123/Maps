import { stateTitles } from "../../data/stateTitles";

export const excludeStringFromArray = (string: string, array: string[]) =>
	!array.includes(string);

export const getRandomIndexFromArray = (array: any[]) =>
	Math.floor(Math.random() * array.length);

export const getRandomState = (excludeList?: string[]) => {
	if (excludeList) {
		const filtered = stateTitles.filter((stateTitle) =>
			excludeStringFromArray(stateTitle, excludeList)
		);

		return filtered[getRandomIndexFromArray(filtered)];
	}

	return stateTitles[getRandomIndexFromArray(stateTitles)];
};
