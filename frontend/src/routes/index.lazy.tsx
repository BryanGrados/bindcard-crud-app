import ThemeButton from "@/shared/components/theme/ThemeButton";
import { Button } from "@/shared/components/ui/button";
import { Calendar } from "@/shared/components/ui/calendar";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/shared/components/ui/popover";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import CreateUserForm from "@/shared/components/users/CreateUserForm";
import UserCard from "@/shared/components/users/UserCard";
import { UserCardHolder } from "@/shared/Domains/User.interface";
import { trpc } from "@/shared/Infrastructure/MiddlewareTRPC";
import { cn } from "@/shared/Infrastructure/TailwindUtils";
import { createLazyFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	const [date, setDate] = useState<Date>();
	const { data } = trpc.cardHolders.getAll.useQuery({ page: 1 });

	console.log(data);

	return (
		<div className="w-full h-full flex flex-col gap-5">
			<div className="h-16 border border-input rounded-lg flex items-center justify-between px-4 bg-white dark:bg-card">
				<h1 className="text-3xl font-bold">Listado Tarjeta Habientes</h1>
				<div className="font-semibold text-muted-foreground flex items-center justify-center gap-5">
					Cambiar tema <ThemeButton />
				</div>
			</div>

			<ScrollArea className="w-full whitespace-nowrap rounded-lg border">
				<div className="py-4 h-full rounded-lg flex-col flex md:flex-row items-center justify-between px-4 bg-white dark:bg-card gap-5">
					<div className="border border-input/50 bg-background shadow-sm flex flex-col gap-4 w-full p-4 rounded-lg">
						<Label htmlFor="tipo">Tipo</Label>
						<Select defaultValue="debito">
							<SelectTrigger id="tipo">
								<SelectValue placeholder="Selecciona un tipo" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="debito">Débito</SelectItem>
								<SelectItem value="credito">Crédito</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="border border-input/50 bg-background shadow-sm flex flex-col gap-4 w-full p-4 rounded-lg">
						<Label htmlFor="categoria">Categoría</Label>
						<Select defaultValue="visa">
							<SelectTrigger id="categoria">
								<SelectValue placeholder="Selecciona un tipo" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="visa">VISA</SelectItem>
								<SelectItem value="mastercard">MASTERCARD</SelectItem>
								<SelectItem value="american_express">
									AMERICAN EXPRESS
								</SelectItem>
								<SelectItem value="diners_club">DINERS CLUB</SelectItem>
								<SelectItem value="discover">DISCOVER</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="border border-input/50 bg-background shadow-sm flex flex-col gap-4 w-full p-4 rounded-lg">
						<Label htmlFor="fecha">Fecha</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"justify-start text-left font-normal",
										!date && "text-muted-foreground",
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{date ? (
										<span>{format(date, "dd/MM/yyyy")}</span>
									) : (
										<span>Seleccione una fecha</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
					<div className="border border-input/50 bg-background shadow-sm flex flex-col gap-4 w-full p-4 rounded-lg">
						<Label htmlFor="users">Buscar Usuarios</Label>
						<div className="flex gap-2 items-center justify-center">
							<Input type="text" placeholder="Juan Perez..." id="users" />
							<Button variant="default">Buscar</Button>
						</div>
					</div>
				</div>
			</ScrollArea>

			<div className="flex-1 bg-white dark:bg-card border border-input rounded-lg flex flex-col gap-5 p-4">
				<div className="flex items-center justify-between p-4 h-16">
					<h2 className="text-xl font-bold">Usuarios</h2>
					<CreateUserForm />
				</div>

				<ScrollArea className="h-[500px] w-full p-4">
					<div className="flex h-full flex-wrap items-center justify-start gap-5">
						{data?.map((cardHolder) => (
							<UserCard
								key={cardHolder.id}
								cardHolder={cardHolder as UserCardHolder}
							/>
						))}
					</div>
				</ScrollArea>

				<div className="flex items-center justify-end gap-4">
					<Button variant="secondary" size="sm">
						Anterior
					</Button>
					<Button variant="secondary" size="sm">
						Siguiente
					</Button>
				</div>
			</div>
		</div>
	);
}
