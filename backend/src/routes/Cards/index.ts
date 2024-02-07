import { z } from "zod";
import {
	publicProcedure,
	router,
} from "../../shared/Infrastructure/MiddlewareTRCP";
import { getCardsByIdController } from "./Application/GetCardsById";
import { CreateCardSchema } from "./Domain/CreateCard.schema";
import { UpdateCardSchema } from "./Domain/UpdateCard.schema";
import { getCardByIdController } from "./Application/GetCardById";
import { createCardController } from "./Application/CreateCard";
import { updateCardController } from "./Application/UpdateCard";
import { deleteCardController } from "./Application/DeleteCard";

const getCardsById = publicProcedure
	.input(
		z.object({
			id: z.string(),
		}),
	)
	.query(({ input }) => getCardsByIdController(input.id));

const getCardById = publicProcedure
	.input(z.string())
	.query(({ input }) => getCardByIdController(input));

const createCard = publicProcedure
	.input(CreateCardSchema)
	.mutation(({ input }) => createCardController(input));

const updateCard = publicProcedure
	.input(UpdateCardSchema)
	.mutation(({ input }) => updateCardController(input));

const deleteCard = publicProcedure
	.input(z.string())
	.mutation(({ input }) => deleteCardController(input));

export const cardsRouter = router({
	getCardsById,
	getCardById,
	createCard,
	updateCard,
	deleteCard,
});
