import { CardMenu } from "./card.menu";
import { COLUMN_TYPE } from "~/store/fillter.atom";
import { twMerge } from "tailwind-merge";
import { CategoryMenuDTO } from "~/types";
type propsSectionMenu = {
    data: CategoryMenuDTO;
    column: COLUMN_TYPE;
    company: string;
};
export function SectionMenu({ data, column, company }: propsSectionMenu) {
    return (
        <section className="p-3 w-full mx-auto md:w-10/12 lg:w-9/12" id={data.slug}>
            <div className="font-medium flex items-center justify-between gap-2">
                <h2>{data.title}</h2>
                <span className="text-gray-600 text-sm">({data.menus.length})</span>
            </div>
            <p className="text-start text-xs text-gray-500 mb-3">{data.description}</p>
            <div
                className={twMerge(
                    "grid gap-2 md:gap-7 lg:gap-5",
                    column === "boxed" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
                    "grid-flow-row-dense",
                    "auto-rows-auto"
                )}
            >
                {data.menus.map((menu) => (
                    <CardMenu column={column} menu={menu} company={company} key={menu.slug} />
                ))}
            </div>
        </section>
    );
}
