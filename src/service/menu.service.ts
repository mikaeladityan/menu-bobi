import { CategoriesMenuDTORes, menu } from "~/constant/menu.constant";

export const menuService = {
    async fetchMenuList(): Promise<CategoriesMenuDTORes[]> {
        return menu;
    },
};
