export enum ORDER_METHOD {
    "dine-in",
    "take-away",
}
export interface OrderItemDTOReq {
    method: ORDER_METHOD | null;
    table: number | null;
    codePromotion: string | null;
}
