"use client";
import { useAtom } from "jotai";
import { companyAtom } from "~/store/company.atom";
import { columnAtom, searchingAtom } from "~/store/fillter.atom";
import { SectionMenu } from "./section.menu";
import { menuAtom } from "~/store/menu.atom";

export function MenuLayout() {
    const [{ data }] = useAtom(companyAtom);
    const [column] = useAtom(columnAtom);
    // const [{ data: res }] = useAtom(menuAtom);
    const [{ data: res }] = useAtom(menuAtom);
    const [search] = useAtom(searchingAtom);

    // normalize search term
    const term = search.trim().toLowerCase();

    // for each category, filter its items by name match; drop empty categories
    const menuData = res?.flatMap((type) => type.categories);

    // Filter data
    const filtered =
        term !== ""
            ? menuData
                  ?.map((category) => {
                      const filteredMenus = category.menus.filter((menu) => menu.title.toLowerCase().includes(term));
                      return { ...category, menus: filteredMenus };
                  })
                  .filter((category) => category.menus.length > 0)
            : menuData;
    // if no search or no categories loaded yet, fall back to full list
    const display = term === "" || !filtered ? menuData : filtered;
    return (
        <section className="flex flex-col bg-gray-200">
            {display?.map((m, i) => (
                <SectionMenu key={i} data={m} column={column} company={data?.name || "Bobi Bowl"} />
            ))}
        </section>
    );
}
