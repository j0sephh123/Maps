import { expect, test } from "@playwright/test";

test("States from local storage have active class", async ({ page }) => {
	await page.addInitScript(() => {
		localStorage.setItem("activeStates", JSON.stringify(["Alaska", "Texas"]));
	});
	await page.goto("http://localhost:5173/");

	const askedState = await page.locator("#askedState").innerText();
	const coords = await page.locator(`#${askedState}`).boundingBox();
	console.log({ askedState });

	if (coords) {
		await page.mouse.click(
			coords.x + coords.width / 2,
			coords.y + coords.height / 2
		);
	}

	expect(await page.locator(`#${askedState}`).getAttribute("class")).toMatch(
		"isActive"
	);

	// check if states loaded from local storage are selected
	// expect(await page.locator("#Alaska").getAttribute("class")).toMatch(
	// 	"isActive"
	// );
	// expect(await page.locator("#Alabama").getAttribute("class")).not.toMatch(
	// 	"isActive"
	// );
	// // expect(await page.locator("#score").innerText()).toBe("1/50");

	// const askedState = await page.locator("#askedState").innerText();
	// const stateElement = page.locator(`#${askedState}`);

	// await stateElement.click();

	// expect(await page.locator(`#${askedState}`).getAttribute("class")).toMatch(
	// 	"isActive"
	// );

	// await page.locator("#Alaska").click();

	// suggest
});
