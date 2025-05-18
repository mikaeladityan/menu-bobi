"use client";
import { useAtom } from "jotai";
import { companyAtom } from "~/store/company.atom";
import { columnAtom, searchingAtom } from "~/store/fillter.atom";
import { SectionMenu } from "./section.menu";
import { menuAtom } from "~/store/menu.atom";

export function MenuLayout() {
    const [{ data }] = useAtom(companyAtom);
    const [column] = useAtom(columnAtom);
    const [{ data: menu }] = useAtom(menuAtom);
    const [search] = useAtom(searchingAtom);

    // normalize search term
    const term = search.trim().toLowerCase();

    // for each category, filter its items by name match; drop empty categories
    const filtered = menu
        ?.map((cat) => {
            const items = cat.items.filter((item) => item.name.toLowerCase().includes(term));
            return { ...cat, items };
        })
        .filter((cat) => cat.items.length > 0);

    // if no search or no categories loaded yet, fall back to full list
    const display = term === "" || !filtered ? menu : filtered;
    return (
        <section className="flex flex-col bg-gray-200">
            {display?.map((m, i) => (
                <SectionMenu key={i} data={m} column={column} company={data?.name || "Bobi Bowl"} />
            ))}
        </section>
    );
}
