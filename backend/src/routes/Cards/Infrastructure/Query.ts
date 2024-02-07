import db from "../../../shared/Infrastructure/DatabaseConnector";
import { CreateCardInput } from "../Domain/CreateCard.schema";
import { UpdateCardInput } from "../Domain/UpdateCard.schema";

export const getCardsByIdQuery = async (id: string) => {
	const cardsById = await db.card.findMany({
		where: {
			cardholderId: id,
		},
	});

	return cardsById;
};

export const getCardByIdQuery = async (id: string) => {
	const card = await db.card.findUnique({
		where: {
			id,
		},
	});

	return card;
};

export const createCardQuery = async (data: CreateCardInput) => {
	const card = await db.card.create({
		data: {
			number: data.number,
			type: data.type,
			categorie: data.categorie,
			cvv: data.cvv,
			expDate: data.expDate,
			cardholderId: data.cardHolderId,
		},
	});

	return card;
};

export const updateCardQuery = async (data: UpdateCardInput) => {
	console.log(data);

	const card = await db.card.update({
		where: {
			id: data.id,
		},
		data: {
			number: data.number,
			type: data.type,
			categorie: data.categorie,
			cvv: data.cvv,
			expDate: data.expDate,
		},
	});

	return card;
};

export const deleteCardQuery = async (id: string) => {
	const card = await db.card.delete({
		where: {
			id,
		},
	});

	return card;
};
