import { categories, categoriesMenu, CategoriesMenuDTORes, CategoryDTORes } from "~/constant/menu.constant";

export const categoryService = {
    async list(): Promise<CategoryDTORes[]> {
        return categories;
    },

    async listCategoryMenu(): Promise<CategoriesMenuDTORes> {
        return categoriesMenu;
    },
};
