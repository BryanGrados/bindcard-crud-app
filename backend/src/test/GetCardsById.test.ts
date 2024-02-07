import { expect, test } from "vitest";
import { getCardsByIdController } from "../routes/Cards/Application/GetCardsById";

test("getCardsByIdController should return data when given an id", async () => {
	const id = "65c36a266d06e73b7b4c9903";

	const result = await getCardsByIdController(id);

	expect(result).toBeDefined();
});

test("getCardsByIdController should throw an error when given an invalid id", async () => {
	const id = "invalidId";

	await expect(getCardsByIdController(id)).rejects.toThrowError();
});
