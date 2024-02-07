import { z } from "zod";
import {
	publicProcedure,
	router,
} from "../../shared/Infrastructure/MiddlewareTRCP";
import { createCardHolderController } from "./Application/CreateCardHolder";
import { getCardHolderByIdController } from "./Application/GetCardHolderById";
import { getCardHoldersController } from "./Application/GetCardHolders";
import { CreateHolderSchema } from "./Domain/CreateCardHolder.schema";
import { UpdateCardHolderSchema } from "./Domain/UpdateCardHolder.schema";
import { updateCardHolderController } from "./Application/UpdateCardHolder";
import { deleteCardHolderController } from "./Application/DeleteCardHolder";

const getCardHolders = publicProcedure
	.input(
		z.object({
			page: z.number(),
		}),
	)
	.query(({ input }) => getCardHoldersController(input.page));

const getCardHolderById = publicProcedure
	.input(z.string())
	.query(({ input }) => getCardHolderByIdController(input));

const createCardHolder = publicProcedure
	.input(CreateHolderSchema)
	.mutation(({ input }) => createCardHolderController(input));

const updateCardHolder = publicProcedure
	.input(UpdateCardHolderSchema)
	.mutation(({ input }) => updateCardHolderController(input));

const deleteCardHolder = publicProcedure
	.input(z.string())
	.mutation(({ input }) => deleteCardHolderController(input));

export const cardsHoldersRouter = router({
	getAll: getCardHolders,
	getById: getCardHolderById,
	create: createCardHolder,
	update: updateCardHolder,
	delete: deleteCardHolder,
});
