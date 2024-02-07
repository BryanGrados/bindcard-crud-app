import { deleteCardQuery } from "../Infrastructure/Query";

export const deleteCardController = async (id: string) => {
	try {
		const findCard = await deleteCardQuery(id);

		return findCard;
	} catch (error) {
		throw new Error(error as string);
	}
};
