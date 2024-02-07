import { z } from "zod";

export const CreateHolderSchema = z.object({
	nombres: z.string(),
	apellidos: z.string(),
	email: z.string().email(),
	telefonoCelular: z.string().regex(/^\d{9}$/),
});

export type CreateHolderInput = z.infer<typeof CreateHolderSchema>;
