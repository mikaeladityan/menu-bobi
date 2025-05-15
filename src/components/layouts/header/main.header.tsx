"use client";
import { IconShoppingBagDiscount } from "@tabler/icons-react";
import { useState } from "react";
import { ORDER_METHOD } from "~/store/order.atom";

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

function CardPromotion() {
    return (
        <>
            <div className="min-w-[300px] inline-block px-5 py-4 bg-gray-50 rounded-lg shadow border border-gray-300">
                <div className="grid grid-cols-6 gap-x-2 gap-y-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-sky-200 text-sky-700 rounded-full">
                            <IconShoppingBagDiscount />
                        </div>
                    </div>
                    <div className="col-span-5 flex flex-col">
                        <h5 className="font-medium">Discount Title</h5>
                        <span className="text-xs text-gray-500 text-wrap">Get 50% OFF with minimum 3 orders</span>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold bg-yellow/30 border text-gray-500 border-yellow w-full rounded-lg col-span-6 cursor-pointer hover:scale-95 hover:shadow-lg transition-all ease-in-out duration-300"
                    >
                        <span>Applied</span>
                    </button>
                </div>
            </div>
            <div className="min-w-[300px] inline-block px-5 py-4 bg-gray-50 rounded-lg shadow border border-gray-300">
                <div className="grid grid-cols-6 gap-x-2 gap-y-4">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center w-10 h-10 bg-sky-200 text-sky-700 rounded-full">
                            <IconShoppingBagDiscount />
                        </div>
                    </div>
                    <div className="col-span-5 flex flex-col">
                        <h5 className="font-medium">Discount Title</h5>
                        <span className="text-xs text-gray-500 text-wrap">Get 50% OFF with minimum 3 orders</span>
                    </div>
                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold bg-yellow border border-yellow w-full rounded-lg col-span-6 cursor-pointer hover:scale-95 hover:shadow-lg transition-all ease-in-out duration-300"
                    >
                        <span>Apply</span>
                    </button>
                </div>
            </div>
        </>
    );
}
