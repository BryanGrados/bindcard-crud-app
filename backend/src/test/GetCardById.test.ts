import { expect, test } from "vitest";
import { getCardByIdController } from "../routes/Cards/Application/GetCardById";

test("getCardByIdController should return data when given a valid id", async () => {
	const id = "65c36a266d06e73b7b4c9903";

	const result = await getCardByIdController(id);

	expect(result).toBeDefined();
});

test("getCardByIdController should throw an error when given an invalid id", async () => {
	const id = "invalidId";

	await expect(getCardByIdController(id)).rejects.toThrowError();
});
