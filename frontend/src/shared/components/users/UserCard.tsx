import { trpc } from "@/shared/Infrastructure/MiddlewareTRPC";
import CardPrototype from "../cards/CardPrototype";
import CreateCardForm from "../cards/CreateCardForm";
import { Badge } from "../ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const UserCard = ({ cardHolder }: { cardHolder: UserCardHolder }) => {
	const { data } = trpc.card.getCardsById.useQuery({ id: cardHolder.id });
	const { mutate } = trpc.cardHolders.delete.useMutation();
	const utils = trpc.useUtils();

	const handleDelete = () => {
		mutate(cardHolder.id, {
			onSuccess: () => {
				utils.cardHolders.invalidate();
			},
		});
	};

	return (
		<Card className="w-full lg:w-[380px] hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
			<CardHeader>
				<CardTitle className="text-2xl flex items-center justify-between">
					{cardHolder.apellido}
					<p className="text-sm font-semibold text-muted-foreground">
						Tarjetas asignadas: {data?.length}
					</p>
				</CardTitle>
				<CardDescription>
					<Badge>Desarrollador Frontend</Badge>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ScrollArea className="max-w-[500px]">
					<div className="flex gap-5">
						{data?.length && data.length > 0 ? (
							data.map((card) => (
								<CardPrototype key={card.id} cardData={card} />
							))
						) : (
							<p className="text-muted-foreground h-[175px]">
								No hay tarjetas asignadas
							</p>
						)}
					</div>

					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</CardContent>
			<CardFooter className="text-sm text-muted-foreground flex items-center justify-between">
				<CreateCardForm id={cardHolder.id} />
				<Button variant="destructive" size={"icon"} onClick={handleDelete}>
					<Trash2 size={20} />
				</Button>
			</CardFooter>
		</Card>
	);
};

export default UserCard;
