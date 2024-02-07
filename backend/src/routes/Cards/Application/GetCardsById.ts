import { getCardsByIdQuery } from "../Infrastructure/Query";

export const getCardsByIdController = async (id: string) => {
	try {
		const data = await getCardsByIdQuery(id);

		return data;
	} catch (error) {
		throw new Error(error as string);
	}
};
