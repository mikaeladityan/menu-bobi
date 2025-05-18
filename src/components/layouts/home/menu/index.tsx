"use client";
import { useAtom } from "jotai";
import { companyAtom } from "~/store/company.atom";
import { columnAtom } from "~/store/fillter.atom";
import { SectionMenu } from "./section.menu";
import { menuAtom } from "~/store/menu.atom";

export function MenuLayout() {
    const [{ data }] = useAtom(companyAtom);
    const [column] = useAtom(columnAtom);
    const [{ data: menu }] = useAtom(menuAtom);

    return (
        <section className="flex flex-col bg-gray-200">
            {menu?.map((m, i) => (
                <SectionMenu data={m} key={i} column={column} company={data?.name || "Bobi Bowl"} />
            ))}
        </section>
    );
}

{
    /* <h2 className="uppercase text-gray-500 font-bold text-xs mt-3 pt-3 px-3 flex items-center justify-start gap-2 border-t border-gray-300 w-full">
    <IconGlassFullFilled size={18} /> Beverages Menu
</h2>;

{
    beverage?.map((bm, i) => <SectionMenu data={bm} key={i} column={column} company={data?.name || "Bobi Bowl"} />);
} */
}
