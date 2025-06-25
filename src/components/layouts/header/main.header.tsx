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
    const [modalDeliver, setModalDeliver] = useState(false);
    return (
        <>
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
                            onClick={() => {
                                handleChangeMethod(ORDER_METHOD["take-away"]);
                                setModalDeliver(true);
                            }}
                            className={`text-[10px] lg:text-xs font-medium p-1.5 cursor-pointer ${
                                orderMethod === ORDER_METHOD["take-away"] && "bg-yellow"
                            }`}
                        >
                            Delivery
                        </button>
                    </div>
                </div>
            </div>
            {modalDeliver && <ModalDelivery open={modalDeliver} onClose={() => setModalDeliver(false)} />}
        </>
    );
}

import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";

type DeliveryApp = {
    name: string;
    logoUrl: string;
    link: string;
};

const deliveryApps: DeliveryApp[] = [
    {
        name: "Talabat",
        logoUrl: "/talabat.webp",
        link: "https://www.talabat.com/uae/restaurant/737203/bobi-bowl-restaurant?aid=1195",
    },
    {
        name: "Deliveroo",
        logoUrl: "/deliveroo.jpeg",
        link: "https://deliveroo.ae/menu/dubai/jafilia/bobi-bowl/",
    },
    {
        name: "Noon Food",
        logoUrl: "/noon.png",
        link: "https://food.noon.com/outlet/BBBWLRTQML-Bobi%20Bowl/",
    },
    {
        name: "Careem",
        logoUrl: "/careem.jpeg",
        link: "https://url.careem.com/Qb4ddjA48cIW",
    },
];

function ModalDelivery({ open, onClose }: { open: boolean; onClose: () => void }) {
    return (
        <Dialog open={open} onClose={onClose} as={Fragment}>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
                <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-md p-5 space-y-4">
                    <Dialog.Title className="text-lg font-semibold">Order via Delivery Apps</Dialog.Title>
                    {deliveryApps.map((app) => (
                        <a
                            key={app.name}
                            href={app.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50 transition"
                        >
                            <div className="flex items-center gap-3">
                                <Image src={app.logoUrl} alt={app.name} width={32} height={32} />
                                <span className="font-medium">{app.name}</span>
                            </div>
                            <button className="text-sm bg-yellow-400 px-3 py-1 rounded-md font-semibold">
                                Continue &gt;
                            </button>
                        </a>
                    ))}
                    <div className="text-right pt-2">
                        <button onClick={onClose} className="text-gray-600 text-sm underline">
                            Close
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
