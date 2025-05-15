import { categories, CategoryDTORes } from "~/constant/menu.constant";

export const categoryService = {
    async list(): Promise<CategoryDTORes[]> {
        return categories;
    },
};
