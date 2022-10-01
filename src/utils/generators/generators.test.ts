import { describe, expect, it, vi, beforeAll, afterAll } from "vitest";
import {
	excludeStringFromArray,
	getRandomIndexFromArray,
	getRandomState,
} from "./generators";

describe("utils > generators > excludeStringFromArray", () => {
	it("correctly removes string from the passed array", () => {
		const result = ["1", "string", "2"].filter((str) =>
			excludeStringFromArray(str, ["1", "2"])
		);

		expect(result).toEqual(["string"]);
	});
});

describe("utils > generators > getRandomIndexFromArray", () => {
	beforeAll(() => {
		vi.stubGlobal("Math", {
			random: () => 0.1,
			floor: Math.floor,
		});
	});

	afterAll(() => {
		vi.resetModules();
	});

	it("gets a random item from an array", () => {
		expect(getRandomIndexFromArray(["1", "string", "2", "3", "5"])).toEqual(0);
	});
});

// describe("utils > generators > getRandomState", () => {
// 	it("dunno yet", () => {
// 		expect(getRandomState()).toEqual(1);
// 	});
// });
