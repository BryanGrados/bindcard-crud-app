import { CardHolder } from "@prisma/client";
import db from "../../../shared/Infrastructure/DatabaseConnector";
import { CreateHolderInput } from "../Domain/CreateCardHolder.schema";
import { UpdateHolderInput } from "../Domain/UpdateCardHolder.schema";

export const getCardHoldersQuery = async (page: number) => {
	const cardHolders = await db.cardHolder.findMany({
		skip: (page - 1) * 10,
	});

	return cardHolders;
};

export const getCardHolderByIdQuery = async (id: string) => {
	const cardHolder = await db.cardHolder.findUnique({
		where: {
			id,
		},
	});

	return cardHolder;
};

export const createCardHolderQuery = async (data: CreateHolderInput) => {
	const cardHolder = await db.cardHolder.create({
		data: {
			nombres: data.nombres,
			apellido: data.apellidos,
			email: data.email,
			telefonoCelular: data.telefonoCelular,
		},
	});

	return cardHolder;
};

export const updateCardHolderQuery = async (data: UpdateHolderInput) => {
	const cardHolder = await db.cardHolder.update({
		where: {
			id: data.id,
		},
		data: {
			nombres: data.nombres,
			apellido: data.apellidos,
			email: data.email,
			telefonoCelular: data.telefonoCelular,
		},
	});

	return cardHolder;
};

export const deleteCardHolderQuery = async (id: string) => {
	const cardHolder = await db.cardHolder.delete({
		where: {
			id,
		},
	});

	return cardHolder;
};
