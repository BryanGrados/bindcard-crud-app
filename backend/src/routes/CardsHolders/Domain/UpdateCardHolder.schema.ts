import { z } from "zod";

export const UpdateCardHolderSchema = z.object({
	id: z.string().max(12),
	nombres: z.string(),
	apellidos: z.string(),
	email: z.string().email(),
	telefonoCelular: z.string().regex(/^\d{9}$/),
});

export type UpdateHolderInput = z.infer<typeof UpdateCardHolderSchema>;
