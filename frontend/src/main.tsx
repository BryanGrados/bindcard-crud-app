import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import TrpcProvider from "./shared/components/providers/TrpcProvider";
import ThemeProvider from "./shared/components/theme/ThemeProvider";
import { routeTree } from "./routeTree.gen";
import "./styles/globals.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<TrpcProvider>
			<ThemeProvider defaultTheme="system" storageKey="ui-theme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</TrpcProvider>
	</React.StrictMode>,
);
