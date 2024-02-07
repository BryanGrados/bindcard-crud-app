import { UpdateCardInput } from "../Domain/UpdateCard.schema";
import { updateCardQuery } from "../Infrastructure/Query";

export const updateCardController = async (input: UpdateCardInput) => {
	try {
		const card = await updateCardQuery(input);

		return card;
	} catch (error) {
		console.log(error);

		throw new Error(error as string);
	}
};
