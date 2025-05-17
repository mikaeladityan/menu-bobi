"use client";
import { useState } from "react";
import { ORDER_METHOD } from "~/store/order.atom";
import { CardPromotion } from "./promotion/card.promotion";

export function MainHeader() {
    return (
        <header className="bg-gray-100 border-b border-gray-300">
            <OrderMethod />
            <div className="px-3 py-5 overflow-x-auto whitespace-nowrap flex gap-5 thin-scroll">
                <CardPromotion />
            </div>
        </header>
    );
}

function OrderMethod() {
    const [orderMethod, setOrderMethod] = useState<ORDER_METHOD>(ORDER_METHOD["dine-in"]);
    const handleChangeMethod = (method: ORDER_METHOD) => {
        setOrderMethod(method);
    };
    return (
        <div className="flex items-start justify-between gap-3 px-3 py-5 border-b border-gray-300">
            <div className="flex flex-col gap-y-1 w-full">
                <p className="font-semibold text-xs w-fit">Order Method:</p>
                <p className="text-[11px] text-gray-500">All price includes 5% VAT.</p>
            </div>
            <div className="border-yellow border rounded-lg overflow-hidden grid grid-cols-2 items-center justify-between w-7/12 text-nowrap">
                <button
                    type="button"
                    onClick={() => handleChangeMethod(ORDER_METHOD["dine-in"])}
                    className={`text-[10px] font-medium p-1.5 cursor-pointer ${
                        orderMethod === ORDER_METHOD["dine-in"] && "bg-yellow"
                    }`}
                >
                    Dine In
                </button>
                <button
                    type="button"
                    onClick={() => handleChangeMethod(ORDER_METHOD["take-away"])}
                    className={`text-[10px] font-medium p-1.5 cursor-pointer ${
                        orderMethod === ORDER_METHOD["take-away"] && "bg-yellow"
                    }`}
                >
                    Take Away
                </button>
            </div>
        </div>
    );
}
