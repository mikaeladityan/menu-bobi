import { IconShoppingBagDiscount } from "@tabler/icons-react";
import { usePromotion } from "~/hook/use.promotion";

export function CardPromotion() {
    const { promotion } = usePromotion();

    return promotion?.map((p) => (
        <div
            key={p.code}
            className="min-w-[300px] inline-block px-5 py-4 bg-gray-50 rounded-lg shadow border border-gray-300"
        >
            <div className="flex flex-col gap-x-2 gap-y-4 h-full justify-between">
                <div className="flex gap-3">
                    <div className="flex items-center justify-center w-fit">
                        <div className="flex items-center justify-center w-10 h-10 bg-sky-200 text-sky-700 rounded-full">
                            <IconShoppingBagDiscount />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <h5 className="font-medium">{p.title}</h5>
                        <span className="text-xs text-gray-500 text-wrap">{p.description}</span>
                    </div>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold bg-yellow border border-yellow w-full rounded-lg col-span-6 cursor-pointer hover:scale-95 hover:shadow-lg transition-all ease-in-out duration-300 capitalize h-fit text-red"
                >
                    <span>Ask your server!</span>
                </button>
            </div>
        </div>
    ));
}
