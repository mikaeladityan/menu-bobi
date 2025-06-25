// import { CategoriesMenuDTORes, menu } from "~/constant/menu.constant";
import { TypeMenuDTO } from "~/types";

export const menuService = {
    async fetchMenuList(): Promise<TypeMenuDTO[]> {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/home/menu`, {
            method: "GET",
        });

        const { data } = await res.json();
        return data;
    },
};
