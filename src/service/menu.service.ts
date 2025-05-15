import {
    bestSellerMenu,
    BestSellerMenuDTORes,
    beveragesMenu,
    CategoriesMenuDTORes,
    foodMenu,
} from "~/constant/menu.constant";

export const menuService = {
    async fetchBestSeller(): Promise<BestSellerMenuDTORes[]> {
        return bestSellerMenu;
    },
    async fetchFoodMenuList(): Promise<CategoriesMenuDTORes[]> {
        return foodMenu;
    },
    async fetchBeverageMenuList(): Promise<CategoriesMenuDTORes[]> {
        return beveragesMenu;
    },
};
