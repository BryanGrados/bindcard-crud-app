import { trpc } from "@/shared/Infrastructure/MiddlewareTRPC";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { useCreateUserForm } from "@/shared/hooks/useCreateUserForm";
import { CreateHolderInput } from "@/shared/schemas/CreateUser.schema";
import { SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CreateUserForm = () => {
	const { register, handleSubmit } = useCreateUserForm();
	const { mutate } = trpc.cardHolders.create.useMutation();
	const utils = trpc.useUtils();

	const onSubmit: SubmitHandler<CreateHolderInput> = async (data) => {
		mutate(data, {
			onSuccess: () => {
				utils.cardHolders.getAll.invalidate();
			},
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Crear usuario</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Creando nuevo usuario</DialogTitle>
					<DialogDescription>
						Llene los campos para crear un nuevo usuario
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="names" className="text-right">
								Nombres
							</Label>
							<Input
								id="names"
								className="col-span-3"
								{...register("nombres", { value: "Miguel Angel" })}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="apellidos" className="text-right">
								Apellidos
							</Label>
							<Input
								id="apellidos"
								className="col-span-3"
								{...register("apellidos", { value: "Perez Duarte" })}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="email" className="text-right">
								Email
							</Label>
							<Input
								id="email"
								className="col-span-3"
								{...register("email", { value: "example@gmail.com" })}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="telefono" className="text-right">
								Teléfono
							</Label>
							<Input
								id="telefono"
								className="col-span-3"
								{...register("telefonoCelular", { value: "916843144" })}
							/>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="submit">Crear usuario</Button>
						</DialogClose>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default CreateUserForm;
