import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	CreateHolderInput,
	CreateHolderSchema,
} from "../schemas/CreateUser.schema";

export const useCreateUserForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateHolderInput>({ resolver: zodResolver(CreateHolderSchema) });

	return {
		register,
		handleSubmit,
		errors,
	};
};
