import { z } from "zod";

export const CreateCardSchema = z.object({
	number: z
		.string()
		.regex(
			/^\b(?:606282\d{10}(\d{3})?|354367\d{10}(\d{3})?|213176\d{10}(\d{3})?)\b$/,
		),
	type: z.string(),
	categorie: z.string(),
	cvv: z.string().regex(/^\d{3,4}$/),
	expDate: z.string(),
});

export type CreateCardInput = z.infer<typeof CreateCardSchema>;
