import { z } from "zod";

export const UpdateCardSchema = z.object({
	type: z.string().optional(),
	categorie: z.string().optional(),
	cvv: z.string().optional(),
	expDate: z.string().optional(),
});

export type UpdateCardInput = z.infer<typeof UpdateCardSchema>;
