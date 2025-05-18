import { atomWithQuery } from "jotai-tanstack-query";
import { menuService } from "~/service/menu.service";

export const menuAtom = atomWithQuery(() => ({
    queryKey: ["menu"],
    queryFn: () => menuService.fetchMenuList(),
}));
