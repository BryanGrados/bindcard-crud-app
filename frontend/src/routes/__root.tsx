import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: () => {
		return <Layout />;
	},
});

const Layout = () => {
	return (
		<main className="dark:bg-black bg-zinc-300 min-h-screen">
			<div className="w-full h-full container py-5">
				<Outlet />
				<TanStackRouterDevtools />
			</div>
		</main>
	);
};
