"use client";
import { IconFlame } from "@tabler/icons-react";
import { CardBestSeller } from "./card.best";
import { CardSkeleton } from "./card.skeleton";
import React from "react";
import { useAtom } from "jotai";
import { menuAtom } from "~/store/menu.atom";

export function BestSeller() {
    const [{ data: menuData, isError, isLoading }] = useAtom(menuAtom);

    // Ekstrak semua menu dari semua kategori dan tipe
    const allMenus = React.useMemo(() => {
        if (!menuData) return [];

        return menuData.flatMap((type) =>
            type.categories.flatMap((category) =>
                category.menus.map((menu) => ({
                    ...menu,
                    // Tambahkan informasi tambahan jika diperlukan
                    categoryTitle: category.title,
                    typeTitle: type.title,
                }))
            )
        );
    }, [menuData]);

    // Filter menu dengan status "FAVOURITE"
    const favouriteMenus = React.useMemo(() => {
        return allMenus.filter((menu) => menu.status === "FAVOURITE");
    }, [allMenus]);

    if (isError) {
        return <p>Gagal memuat best seller.</p>;
    }

    return (
        <section className="w-full bg-gray-100 py-3">
            <div className="w-full flex flex-col gap-y-3 md:w-10/12 mx-auto">
                <div className="px-3">
                    <h2 className="font-medium flex items-center text-red justify-start gap-1 mb-2 lg:text-xl">
                        <IconFlame size={18} />
                        <span>Best Seller!</span>
                    </h2>
                </div>
                <div className="flex overflow-auto whitespace-nowrap thin-scroll gap-5 py-2 min-h-48 ps-3">
                    {isLoading
                        ? [1, 2, 3].map((v) => <CardSkeleton key={v} />)
                        : favouriteMenus.map((menu) => (
                              <CardBestSeller
                                  key={menu.slug}
                                  menu={{
                                      ...menu,
                                      // Pastikan properti yang diharapkan CardBestSeller tersedia
                                      title: menu.title,
                                      // Tambahkan properti lain yang diperlukan
                                  }}
                              />
                          ))}
                </div>
            </div>
        </section>
    );
}
