"use client";
import { IconShoppingBag } from "@tabler/icons-react";
import { Brand } from "~/components/ui/brand";

export function MainNavbar() {
    return (
        <nav className="sticky z-40 top-0 left-0 right-0 w-full mx-auto bg-gray-50 text-gray-900 border-b border-gray-300">
            <section className="flex items-center justify-between gap-5 px-5 py-4 md:py-6 w-full md:w-10/12 mx-auto">
                <Brand />

                {/* side button navbar */}
                <div className="w-full flex items-center justify-end gap-5">
                    <button className="relative cursor-pointer">
                        <IconShoppingBag className="text-red" stroke={2} />
                        <div className="flex items-center justify-center w-auto h-5 bg-yellow absolute -top-2 -right-3 rounded-full text-red text-[11px] px-1 border border-gray-50">
                            <span>0</span>
                        </div>
                    </button>
                </div>
            </section>

            {/* Searching */}

            {/* Categories */}
            {/* <CategoriesNavbar /> */}
        </nav>
    );
}
