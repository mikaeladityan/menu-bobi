import { useQuery } from "@tanstack/react-query";
import { promotionService } from "~/service/promotion.service";

export function usePromotion() {
    const { data: promotion } = useQuery({
        queryKey: ["promotions"],
        queryFn: () => promotionService.fetchPromotions(),
    });

    return { promotion };
}
