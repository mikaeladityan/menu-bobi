"use client";
import { IconCategory, IconListDetails, IconLoader3 } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { InputSearch } from "~/components/ui/input.search";
import { categoryService } from "~/service/category.service";
import { alertAtom } from "~/store/alert.atom";
import { COLUMN_TYPE, columnAtom, searchingAtom } from "~/store/fillter.atom";

export function CategoriesNavbar() {
    const setAlert = useSetAtom(alertAtom);
    const [column, setColumn] = useAtom<COLUMN_TYPE>(columnAtom);

    const {
        data: categories,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoryService.list(),
        staleTime: 60 * 500,
    });

    useEffect(() => {
        if (isError) {
            setAlert({ type: "error", title: "Error", message: "Failed Fetching Categories" });
        }
    }, [isError, setAlert]);
    useEffect(() => {
        if (typeof window === "undefined") return;

        const raw = window.localStorage.getItem("column");
        if (raw === "boxed" || raw === "list") {
            setColumn(raw);
        } else {
            setColumn("boxed");
            window.localStorage.setItem("column", "boxed");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const router = useRouter();
    const [search, setSearch] = useAtom(searchingAtom);
    return (
        <section className="bg-gray-50 sticky z-40 border-y border-gray-300 thin-scroll top-0 left-0 right-0 py-5 flex flex-col gap-y-2 px-3">
            <div className="ps-1 flex items-start justify-between gap-2">
                <div className="flex items-center justify-start gap-2">
                    <button
                        type="button"
                        onClick={() => setColumn("boxed")}
                        className={twMerge("cursor-pointer", column === "boxed" ? "text-red" : "text-gray-500")}
                    >
                        <IconCategory size={25} stroke={2} />
                    </button>
                    <button
                        type="button"
                        onClick={() => setColumn("list")}
                        className={twMerge("cursor-pointer", column === "list" ? "text-red" : "text-gray-500")}
                    >
                        <IconListDetails size={25} stroke={2} />
                    </button>
                </div>

                {isLoading ? (
                    <div className="ms-auto w-full">
                        <IconLoader3 className="animate-spin ms-auto text-red" size={25} stroke={2} />
                    </div>
                ) : (
                    <div
                        className={twMerge(
                            "flex justify-start items-center w-full flex-nowrap overflow-x-auto thin-scroll gap-3"
                        )}
                    >
                        {categories?.map((cat, i) => (
                            <button
                                type="button"
                                key={i}
                                onClick={() => router.push(`#${cat.slug}`)}
                                className={`cursor-pointer w-full text-xs text-nowrap bg-inherit text-gray-800 border border-gray-800 px-3 rounded-full py-1 hover:bg-red hover:text-gray-50 transition-all ease-in-out duration-300 hover:border-red`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <InputSearch
                value={search}
                handle={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                className={"w-full"}
            />
        </section>
    );
}
