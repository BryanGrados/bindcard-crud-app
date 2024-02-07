import { UpdateHolderInput } from "../Domain/UpdateCardHolder.schema";
import { updateCardHolderQuery } from "../Infrastructure/Query";

export const updateCardHolderController = async (input: UpdateHolderInput) => {
	try {
		const cardHolder = await updateCardHolderQuery(input);

		return cardHolder;
	} catch (error) {
		throw new Error(error as string);
	}
};
