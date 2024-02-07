import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateCardInput, CreateCardSchema } from "../schemas/CreateCardschema";

export const useCreateCardForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateCardInput>({ resolver: zodResolver(CreateCardSchema) });

	return {
		register,
		handleSubmit,
		errors,
	};
};
