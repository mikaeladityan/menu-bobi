import { categories, CategoryDTORes } from "~/constant/categories.constant";

export const categoryService = {
    async list(): Promise<CategoryDTORes[]> {
        return categories;
    },
};
