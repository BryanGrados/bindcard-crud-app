import { useForm } from "react-hook-form";
import { UpdateCardInput, UpdateCardSchema } from "../schemas/UpdateCardSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useUpdateCardForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateCardInput>({
		resolver: zodResolver(UpdateCardSchema),
	});

	return {
		register,
		handleSubmit,
		errors,
	};
};
