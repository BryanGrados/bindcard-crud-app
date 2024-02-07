import { expect, test } from "vitest";
import { createCardController } from "../routes/Cards/Application/CreateCard";
import { CreateCardInput } from "../routes/Cards/Domain/CreateCard.schema";

test("createCardController should return data when createCardQuery succeeds", async () => {
	const input: CreateCardInput = {
		cardHolderId: "65c36a266d06e73b7b4c9903",
		number: "1234567890123456",
		expDate: "12/23",
		cvv: "123",
		categorie: "VISA",
		type: "Crédito",
	};

	const result = await createCardController(input as CreateCardInput);

	expect(result).toBeDefined();
});

test("createCardController should throw an error when createCardQuery fails", async () => {
	const input: CreateCardInput = {
		cardHolderId: "null",
		number: "null",
		expDate: "null",
		cvv: "null",
		categorie: "null",
		type: "null",
	};

	await expect(createCardController(input)).rejects.toThrowError();
});
