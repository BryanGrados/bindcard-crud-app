import { getCardHolderByIdQuery } from "../Infrastructure/Query";

export const getCardHolderByIdController = async (id: string) => {
	try {
		const data = await getCardHolderByIdQuery(id);

		return data;
	} catch (error) {
		throw new Error(error as string);
	}
};
