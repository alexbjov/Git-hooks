import { sum } from ".";
import { expect } from "./node_modules/jest";

test("Add 1 + 2 to be equal to 3", () => {
	expect(sum(1, 2).toBe(3));
});
