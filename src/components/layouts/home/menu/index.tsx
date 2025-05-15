"use client";
import { IconBowlChopsticksFilled, IconGlassFullFilled } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { companyAtom } from "~/store/company.atom";
import { useQuery } from "@tanstack/react-query";
import { menuService } from "~/service/menu.service";
import { columnAtom } from "~/store/fillter.atom";
import { SectionMenu } from "./section.menu";

export function MenuLayout() {
    const [{ data }] = useAtom(companyAtom);
    const [column] = useAtom(columnAtom);
    const { data: food } = useQuery({
        queryKey: ["menu", "food"],
        queryFn: () => menuService.fetchFoodMenuList(),
    });
    const { data: beverage } = useQuery({
        queryKey: ["menu", "beverage"],
        queryFn: () => menuService.fetchBeverageMenuList(),
    });
    return (
        <section className="flex flex-col bg-gray-200">
            <h2 className="uppercase text-gray-500 font-bold text-xs pt-3 px-3 flex items-center justify-start gap-2">
                <IconBowlChopsticksFilled size={18} /> Food Menu
            </h2>
            {food?.map((fm, i) => (
                <SectionMenu data={fm} key={i} column={column} company={data?.name || "Bobi Bowl"} />
            ))}

            <h2 className="uppercase text-gray-500 font-bold text-xs mt-3 pt-3 px-3 flex items-center justify-start gap-2 border-t border-gray-300 w-full">
                <IconGlassFullFilled size={18} /> Beverages Menu
            </h2>

            {beverage?.map((bm, i) => (
                <SectionMenu data={bm} key={i} column={column} company={data?.name || "Bobi Bowl"} />
            ))}
        </section>
    );
}
