"use client";
import { IconFlame } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { menuService } from "~/service/menu.service";
import { CardBestSeller } from "./card.best";
import { CardSkeleton } from "./card.skeleton";

export function BestSeller() {
    const {
        data: menu,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["menu", "best-seller"],
        queryFn: () => menuService.fetchBestSeller(),
        staleTime: 60 * 1000,
    });

    if (isError) {
        return <p>Gagal memuat best seller.</p>;
    }

    return (
        <section className="w-full flex flex-col gap-y-3 bg-gray-100 py-3">
            <div className="px-3">
                <h2 className="font-medium flex items-center text-red justify-start gap-1 mb-2">
                    <IconFlame size={18} />
                    <span>Best Seller!</span>
                </h2>
                <p className="text-xs text-gray-600 w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!
                </p>
            </div>

            <div className="flex overflow-auto whitespace-nowrap thin-scroll gap-5 py-2 min-h-48 ps-3">
                {isLoading
                    ? [1, 2, 3].map((v) => <CardSkeleton key={v} />)
                    : menu?.map((m, i) => <CardBestSeller key={i} menu={m} />)}
            </div>
        </section>
    );
}
