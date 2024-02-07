import { CardInformation } from "@/shared/Domains/Card.interface";
import { trpc } from "@/shared/Infrastructure/MiddlewareTRPC";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import EditCardForm from "./EditCardForm";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useUpdateCardForm } from "@/shared/hooks/useUpdateCardForm";
import { SubmitHandler } from "react-hook-form";
import { UpdateCardInput } from "@/shared/schemas/UpdateCardSchema";

const CardPrototype = ({ cardData }: { cardData: CardInformation }) => {
	const { data } = trpc.cardHolders.getById.useQuery(cardData.cardholderId);
	const { mutate } = trpc.card.updateCard.useMutation();
	const { mutate: deleteCard } = trpc.card.deleteCard.useMutation();
	const { register, handleSubmit } = useUpdateCardForm();
	const utils = trpc.useUtils();

	const encryptedCardNumber = cardData.number.replace(/\d(?=\d{4})/g, "*");
	const encryptCvv = cardData.cvv.replace(/\d(?=\d{0})/g, "*");

	const onSubmit: SubmitHandler<UpdateCardInput> = (data) => {
		const updateCardData = {
			...data,
			id: cardData.id,
		};

		mutate(updateCardData, {
			onSuccess: () => {
				utils.card.getCardsById.invalidate();
			},
		});
	};

	const handleDelete = () => {
		deleteCard(cardData.id, {
			onSuccess: () => {
				utils.card.getCardsById.invalidate();
			},
		});
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="flex items-center justify-between gap-5">
					<div className="rounded-xl shadow-md p-6 w-72 border border-yellow-500">
						<div className="flex justify-between items-center mb-4">
							<p className="text-sm font-semibold text-muted-foreground">
								Valido hasta: {cardData.expDate}
							</p>
						</div>
						<div className="flex justify-center mb-6">
							<p className="text-xl font-semibold">
								{cardData.type} **** **** **** {encryptedCardNumber.slice(-4)}
							</p>
						</div>
						<div className="flex justify-between items-center">
							<div>
								<p className="text-xs text-gray-500">Propietario</p>
								<p className="font-semibold">
									{data?.nombres} {data?.apellido}
								</p>
							</div>
							<div>
								<p className="text-xs text-gray-500">CVV</p>
								<p className="font-semibold">{encryptCvv}</p>
							</div>
						</div>
					</div>
				</div>
			</SheetTrigger>
			<SheetContent className="flex flex-col gap-10">
				<SheetHeader>
					<SheetTitle>
						{data?.nombres} {data?.apellido}
					</SheetTitle>
					<SheetDescription>
						Recuerda que la información de la tarjeta es confidencial
					</SheetDescription>
				</SheetHeader>
				<form
					className="flex flex-col gap-10"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col items-start justify-between gap-5 ">
						<div className="flex gap-2 items-center justify-end w-full">
							<Label className="w-1/3">Número</Label>
							<Input
								placeholder="Nombre"
								value={encryptedCardNumber}
								disabled
							/>
						</div>
						<div className="flex gap-2 items-center justify-center w-full">
							<Label className="w-1/3">Fecha de expiración</Label>
							<Input
								placeholder="Nombre"
								{...register("expDate", {
									required: true,
									value: cardData?.expDate,
								})}
							/>
						</div>
						<div className="flex gap-2 items-center justify-center w-full">
							<Label className="w-1/3">CVV</Label>
							<Input
								placeholder="Nombre"
								{...register("cvv", { required: true, value: cardData?.cvv })}
							/>
						</div>
						<div className="flex gap-2 items-center justify-center w-full">
							<Label className="w-1/3">Tipo</Label>
							<Input
								placeholder="Nombre"
								{...register("type", { required: true, value: cardData?.type })}
							/>
						</div>
						<div className="flex gap-2 items-center justify-center w-full">
							<Label className="w-1/3">Categoria</Label>
							<Input
								placeholder="Nombre"
								value={cardData?.categorie}
								{...register("categorie", {
									required: true,
									value: cardData?.categorie,
								})}
							/>
						</div>
					</div>
					<SheetFooter className="flex">
						<SheetClose asChild>
							<Button
								type="button"
								variant={"destructive"}
								onClick={handleDelete}
							>
								Eliminar tarjeta
							</Button>
						</SheetClose>
						<SheetClose asChild>
							<Button type="submit">Guardar cambios</Button>
						</SheetClose>
					</SheetFooter>
				</form>
			</SheetContent>
		</Sheet>
	);
};

export default CardPrototype;
