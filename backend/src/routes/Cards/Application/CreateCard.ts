import { CreateCardInput } from "../Domain/CreateCard.schema";
import { createCardQuery } from "../Infrastructure/Query";

export const createCardController = async (input: CreateCardInput) => {
	try {
		const data = await createCardQuery(input);
		return data;
	} catch (error) {
		throw new Error(error as string);
	}
};
