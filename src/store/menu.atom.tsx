import { atomWithQuery } from "jotai-tanstack-query";
import { menuService } from "~/service/menu.service";

export const menuAtom = atomWithQuery(() => ({
    queryKey: ["menus"],
    queryFn: () => menuService.fetchMenuList(),
}));
