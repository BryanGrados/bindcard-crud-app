import { initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = ({
	req,
	res,
}: CreateExpressContextOptions) => ({});

const t = initTRPC.context().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
