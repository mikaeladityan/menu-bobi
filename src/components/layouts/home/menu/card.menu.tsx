import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { MenuItem, STATUS } from "~/constant/menu.constant";

export function CardMenu({ menu, company }: { menu: MenuItem; company: string }) {
    return (
        <button
            key={menu.slug}
            type="button"
            className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow cursor-pointer text-start flex flex-col justify-start min-w-[175px] min-h-48"
        >
            <div className="relative min-h-20 p-3">
                <Image
                    src={
                        menu.image ||
                        "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Javanese%20Chicken%20Satay%205%20pcs_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true"
                    }
                    alt={`${menu.name} | ${company}`}
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover rounded"
                    priority
                    quality={100}
                />
            </div>
            <div className="pb-2 px-3 flex flex-col justify-between gap-y-2">
                <h3 className="text-sm flex items-center justify-start gap-1">
                    {menu.status === STATUS.favourite && (
                        <div className="bg-red flex items-center justify-center w-9 h-4 pt-[1px] ps-[1px] rounded-xs text-gray-50">
                            <span className="text-[10px] uppercase font-medium">best</span>
                        </div>
                    )}
                    {menu.name}
                </h3>
                <div className="flex items-center justify-between gap-3 w-full">
                    <span className="flex items-center justify-start gap-1 text-[11px] px-3 py-0.5 bg-yellow/20 w-fit border rounded-sm border-yellow">
                        <IconStarFilled className="text-yellow" size={12} /> {menu.rating || "5.0"}
                    </span>
                    <span className="text-red text-sm font-medium text-end">AED {menu.price}</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-3">{menu.description}</p>
            </div>
        </button>
    );
}
