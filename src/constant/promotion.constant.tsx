export interface PromotionDTORes {
    code: string;
    title: string;
    description: string;
}

export const promotion: Array<PromotionDTORes> = [
    {
        code: "FREEGIFT2025",
        title: "Free Gift",
        description: "For first time visitor you can get 10% discount or Free Drink",
    },
    {
        code: "LOYALTY2025",
        title: "Loyalty Program",
        description: "Get one stamp on every visit with a meal. Collect 6 stamps and get one free meal on us",
    },
];
