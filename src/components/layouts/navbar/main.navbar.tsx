"use client";
import { IconSearch, IconShoppingBag, IconX } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { AnimatePresence } from "motion/react";
import { ChangeEvent, useState } from "react";
import { Brand } from "~/components/ui/brand";
import { InputSearch } from "~/components/ui/input.search";
import { searchingAtom } from "~/store/searching.atom";

export function MainNavbar() {
    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [search, setSearch] = useAtom(searchingAtom);
    return (
        <nav className="sticky z-40 w-full top-0 left-0 right-0 max-w-md mx-auto bg-gray-50 text-gray-900 p-5 py-4 border-b border-gray-300">
            <section className="flex items-center justify-between gap-5">
                <Brand />

                <div className="w-full flex items-center justify-end gap-5">
                    <button
                        className="relative cursor-pointer text-red font-medium flex items-center justify-center gap-1"
                        type="button"
                        onClick={() => setSearchActive(!searchActive)}
                    >
                        {searchActive ? (
                            <>
                                <IconX size={20} stroke={2} />
                                Close
                            </>
                        ) : (
                            <>
                                <IconSearch size={20} stroke={2} /> Search
                            </>
                        )}
                    </button>
                    <button className="relative cursor-pointer">
                        <IconShoppingBag className="text-red" stroke={2} />
                        <div className="flex items-center justify-center w-auto h-5 bg-yellow absolute -top-2 -right-3 rounded-full text-red text-[11px] px-1 border border-gray-50">
                            <span>99</span>
                        </div>
                    </button>
                </div>
            </section>
            <AnimatePresence initial={false}>
                {searchActive && (
                    <InputSearch
                        value={search}
                        handle={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        className={!searchActive ? "py-0" : "mt-5"}
                    />
                )}
            </AnimatePresence>
        </nav>
    );
}
