import { getCardByIdQuery } from "../Infrastructure/Query";

export const getCardByIdController = async (id: string) => {
	try {
		const data = await getCardByIdQuery(id);

		return data;
	} catch (error) {
		throw new Error(error as string);
	}
};
