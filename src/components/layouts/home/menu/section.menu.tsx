import { twMerge } from "tailwind-merge";
import { CategoriesMenuDTORes } from "~/constant/menu.constant";
import { CardMenu } from "./card.menu";
import { COLUMN_TYPE } from "~/store/fillter.atom";
type propsSectionMenu = {
    data: CategoriesMenuDTORes;
    column: COLUMN_TYPE;
    company: string;
};
export function SectionMenu({ data, column, company }: propsSectionMenu) {
    return (
        <section className="p-3 pt-0">
            <div className="font-medium mb-3 flex items-center justify-between gap-2">
                <h2>{data.category}</h2>
                <span className="text-gray-600 text-sm">({data.items.length})</span>
            </div>
            <div className={twMerge("grid gap-4", column === "boxed" ? "grid-cols-2" : "grid-cols-1")}>
                {data.items.map((menu) => (
                    <CardMenu menu={menu} company={company} key={menu.slug} />
                ))}
            </div>
        </section>
    );
}
