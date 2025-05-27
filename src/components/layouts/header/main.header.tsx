"use client";
import { useState } from "react";
import { ORDER_METHOD } from "~/store/order.atom";
import { CardPromotion } from "./promotion/card.promotion";

export function MainHeader() {
    return (
        <header className="bg-gray-100 border-b border-gray-300 w-full">
            <OrderMethod />
            <div className="px-3 py-5 overflow-x-auto whitespace-nowrap flex gap-5 thin-scroll w-full ms-0 lg:ms-32 md:w-10/12 lg:w-8/12 lg:me-auto justify-start">
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
        <div className="border-b border-gray-300">
            <div className="flex items-start justify-between px-3 py-5  gap-3 w-full md:w-10/12 mx-auto">
                <div className="flex flex-col gap-y-1 w-full">
                    <p className="font-semibold text-xs w-fit lg:text-base">Order Method:</p>
                    <p className="text-[11px] text-gray-500 lg:text-sm">All price includes 5% VAT.</p>
                </div>
                <div className="border-yellow border rounded-lg overflow-hidden grid grid-cols-2 items-center justify-between w-7/12 text-nowrap lg:w-3/12">
                    <button
                        type="button"
                        onClick={() => handleChangeMethod(ORDER_METHOD["dine-in"])}
                        className={`text-[10px] lg:text-xs font-medium p-1.5 cursor-pointer ${
                            orderMethod === ORDER_METHOD["dine-in"] && "bg-yellow"
                        }`}
                    >
                        Dine In
                    </button>
                    <button
                        type="button"
                        onClick={() => handleChangeMethod(ORDER_METHOD["take-away"])}
                        className={`text-[10px] lg:text-xs font-medium p-1.5 cursor-pointer ${
                            orderMethod === ORDER_METHOD["take-away"] && "bg-yellow"
                        }`}
                    >
                        Take Away
                    </button>
                </div>
            </div>
        </div>
    );
}
