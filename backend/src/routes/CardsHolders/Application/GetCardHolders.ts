import { getCardHoldersQuery } from "../Infrastructure/Query";

export const getCardHoldersController = async (page: number) => {
	try {
		const data = await getCardHoldersQuery(page);

		return data;
	} catch (error) {
		throw new Error(error as string);
	}
};
