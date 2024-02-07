import { z } from "zod";

export const CreateCardSchema = z.object({
	number: z.string(),
	type: z.string(),
	categorie: z.string(),
	cvv: z.string(),
	expDate: z.string(),
	cardHolderId: z.string(),
});

export type CreateCardInput = z.infer<typeof CreateCardSchema>;
