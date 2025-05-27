"use client";
import { IconFlame } from "@tabler/icons-react";
import { CardBestSeller } from "./card.best";
import { CardSkeleton } from "./card.skeleton";
import React from "react";
import { STATUS } from "~/types";
import { useAtom } from "jotai";
import { menuAtom } from "~/store/menu.atom";

export function BestSeller() {
    const [{ data: menu, isError, isLoading }] = useAtom(menuAtom);
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
                    {/* <p className="text-xs text-gray-600 w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, cupiditate!
                </p> */}
                </div>

                <div className="flex overflow-auto whitespace-nowrap thin-scroll gap-5 py-2 min-h-48 ps-3">
                    {isLoading
                        ? [1, 2, 3].map((v) => <CardSkeleton key={v} />)
                        : menu?.map((m, i) => (
                              <React.Fragment key={i}>
                                  {m.items
                                      .filter((a) => a.status === STATUS.favourite)
                                      .map((mbest) => (
                                          <CardBestSeller key={mbest.slug} menu={mbest} />
                                      ))}
                              </React.Fragment>
                          ))}
                </div>
            </div>
        </section>
    );
}
