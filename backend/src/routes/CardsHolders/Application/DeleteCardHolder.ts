import { deleteCardHolderQuery } from "../Infrastructure/Query";

export const deleteCardHolderController = async (id: string) => {
	try {
		const findCardHolder = await deleteCardHolderQuery(id);

		return findCardHolder;
	} catch (error) {
		throw new Error(error as string);
	}
};
