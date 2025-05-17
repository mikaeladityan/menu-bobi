import { promotion, PromotionDTORes } from "~/constant/promotion.constant";

export const promotionService = {
    async fetchPromotions(): Promise<PromotionDTORes[]> {
        return promotion;
    },
};
