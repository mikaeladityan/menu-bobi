"use client";
import { IconCategory, IconListDetails, IconLoader3 } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { categoryService } from "~/service/category.service";
import { alertAtom } from "~/store/alert.atom";

export function CategoriesNavbar() {
    const setAlert = useSetAtom(alertAtom);
    const {
        data: categories,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: () => categoryService.list(),
        staleTime: 2 * 60 * 60,
    });

    useEffect(() => {
        if (isError) {
            setAlert({ type: "error", title: "Error", message: "Failed Fetching Categories" });
        }
    }, [isError, setAlert]);
    return (
        <section className="flex items-start justify-between gap-2">
            <div className="flex items-center justify-start gap-2">
                <button type="button" className="cursor-pointer text-red">
                    <IconCategory size={25} stroke={2} />
                </button>
                <button type="button" className="cursor-pointer text-gray-500">
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
                            className={`cursor-pointer w-full text-xs text-nowrap bg-gray-50 text-gray-800 border border-gray-800 px-3 rounded-full py-1 hover:bg-red hover:text-gray-50 transition-all ease-in-out duration-300 hover:border-red`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
}
