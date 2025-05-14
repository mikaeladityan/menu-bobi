"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as JotaiProvider } from "jotai";
import React from "react";

const queryClient = new QueryClient();
export function RootProvider({ children }: { children: React.ReactNode }) {
	return (
		<JotaiProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{children}
			</QueryClientProvider>
		</JotaiProvider>
	);
}
