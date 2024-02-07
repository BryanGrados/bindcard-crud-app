import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext, router } from "./shared/Infrastructure/MiddlewareTRCP";
import { cardsHoldersRouter } from "./routes/CardsHolders";
import { cardsRouter } from "./routes/Cards";

const app = express();

app.use(cors());
app.use(morgan("dev"));

const appRouter = router({
	cardHolders: cardsHoldersRouter,
	card: cardsRouter,
});

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	}),
);

export type AppRouter = typeof appRouter;

app.listen(4000, () => {
	console.log("Server is running on port 4000");
});
