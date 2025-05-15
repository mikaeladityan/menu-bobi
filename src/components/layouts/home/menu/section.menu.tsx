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
        <section className="p-3 pt-0 w-full">
            <div className="font-medium mb-3 flex items-center justify-between gap-2">
                <h2>{data.category}</h2>
                <span className="text-gray-600 text-sm">({data.items.length})</span>
            </div>
            <div
                className={twMerge(
                    "grid gap-2",
                    // selalu 2 kolom saat boxed, 1 kolom saat list
                    column === "boxed" ? "grid-cols-2" : "grid-cols-1",
                    // ini yang membuat Grid pack item per baris & kolom, fill lubang:
                    "grid-flow-row-dense",
                    // baris otomatis tinggi sesuai konten
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
