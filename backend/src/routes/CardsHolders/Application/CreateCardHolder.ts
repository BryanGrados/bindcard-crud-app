import { CreateHolderInput } from "../Domain/CreateCardHolder.schema";
import { createCardHolderQuery } from "../Infrastructure/Query";

export const createCardHolderController = async (input: CreateHolderInput) => {
	try {
		const data = await createCardHolderQuery(input);
		return data;
	} catch (error) {
		throw new Error(error as string);
	}
};
