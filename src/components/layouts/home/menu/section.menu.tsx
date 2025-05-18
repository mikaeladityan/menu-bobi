import { CategoriesMenuDTORes } from "~/constant/menu.constant";
import { CardMenu } from "./card.menu";
import { COLUMN_TYPE } from "~/store/fillter.atom";
import { twMerge } from "tailwind-merge";
type propsSectionMenu = {
    data: CategoriesMenuDTORes;
    column: COLUMN_TYPE;
    company: string;
};
export function SectionMenu({ data, column, company }: propsSectionMenu) {
    return (
        <section className="p-3 w-full" id={data.slug}>
            <div className="font-medium flex items-center justify-between gap-2">
                <h2>{data.category}</h2>
                <span className="text-gray-600 text-sm">({data.items.length})</span>
            </div>
            <p className="text-start text-xs text-gray-500 mb-3">{data.desc}</p>
            <div
                className={twMerge(
                    "grid gap-2",
                    column === "boxed" ? "grid-cols-2" : "grid-cols-1",
                    "grid-flow-row-dense",
                    "auto-rows-auto"
                )}
            >
                {data.items.map((menu) => (
                    <CardMenu menu={menu} company={company} key={menu.slug} />
                ))}
            </div>
        </section>
    );
}
