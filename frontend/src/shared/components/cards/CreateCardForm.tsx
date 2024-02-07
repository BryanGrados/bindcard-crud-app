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
import { CreditCard } from "lucide-react";
import { useCreateCardForm } from "@/shared/hooks/useCreateCardForm";
import { CreateCardInput } from "@/shared/schemas/CreateCardschema";
import { useEffect } from "react";

const CreateCardForm = ({ id }: { id: string }) => {
	const { register, handleSubmit, errors } = useCreateCardForm();
	const { data } = trpc.cardHolders.getById.useQuery(id);
	const { mutate } = trpc.card.createCard.useMutation();
	const utils = trpc.useUtils();

	const onSubmit: SubmitHandler<CreateCardInput> = async (data) => {
		const cardData = {
			...data,
			cardHolderId: id,
		};

		mutate(cardData, {
			onSuccess: () => {
				utils.card.getCardsById.invalidate();
			},
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size={"icon"}>
					<CreditCard className="h-6 w-6" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[800px] h-[450px]">
				<div className="rounded-lg shadow-md p-6">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-cols-2 gap-4 mb-4">
							<div className="col-span-2 gap-2 flex flex-col">
								<Label
									htmlFor="card-number"
									className="block text-sm font-medium"
								>
									Número de Tarjeta
									<span className="text-muted-foreground">({id})</span>
								</Label>
								<Input
									type="text"
									id="card-number"
									className="mt-1 block w-full shadow-sm sm:text-sm border-input rounded-md"
									placeholder="**** **** **** ****"
									{...register("number")}
								/>
							</div>
							<div className="gap-2 flex flex-col">
								<Label
									htmlFor="expiration-date"
									className="block text-sm font-medium"
								>
									Fecha de Expiración
								</Label>
								<Input
									type="text"
									id="expiration-date"
									className="mt-1 block w-full shadow-sm sm:text-sm border-input rounded-md"
									placeholder="MM / YY"
									{...register("expDate")}
								/>
							</div>
							<div className="gap-2 flex flex-col">
								<Label htmlFor="cvv" className="block text-sm font-medium">
									CVV
								</Label>
								<Input
									type="text"
									id="cvv"
									className="mt-1 block w-full shadow-sm sm:text-sm border-input rounded-md"
									placeholder="***"
									{...register("cvv")}
								/>
							</div>
							<div className="gap-2 flex flex-col">
								<Label
									htmlFor="card-holder"
									className="block text-sm font-medium"
								>
									Tipo
								</Label>
								<Input
									type="text"
									id="card-holder"
									className="mt-1 block w-full shadow-sm sm:text-sm border-input rounded-md"
									placeholder="Débito/Crédito"
									{...register("type")}
								/>
							</div>
							<div className="gap-2 flex flex-col">
								<Label
									htmlFor="card-holder"
									className="block text-sm font-medium"
								>
									Categoria
								</Label>
								<Input
									type="text"
									id="card-holder"
									className="mt-1 block w-full shadow-sm sm:text-sm border-input rounded-md"
									placeholder="VISA/MASTERCARD/AMEX"
									{...register("categorie")}
								/>
							</div>
							<div className="col-span-2  gap-2 flex flex-col">
								<Label
									htmlFor="card-holder"
									className="block text-sm font-medium"
								>
									Card Holder
								</Label>
								<Input
									type="text"
									id="card-holder"
									className="mt-1 block w-full shadow-sm sm:text-sm border-input rounded-md"
									value={`${data?.nombres} ${data?.apellido}`}
									disabled
								/>
							</div>
						</div>

						<DialogFooter>
							<DialogClose>
								<Button type="submit">Añadir Tarjeta</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default CreateCardForm;
