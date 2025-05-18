import { useAtom } from "jotai";
import Image from "next/image";
import { MenuItem } from "~/constant/menu.constant";
import { companyAtom } from "~/store/company.atom";

export function CardBestSeller({ menu }: { menu: MenuItem }) {
    const [{ data: company }] = useAtom(companyAtom);
    return (
        <button
            type="button"
            className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow cursor-pointer text-start flex flex-col justify-start min-w-[200px] min-h-48"
        >
            <div className="relative min-h-20">
                <Image
                    src={
                        menu.image ||
                        "https://img1.wsimg.com/isteam/ip/3f357009-a31a-42b3-bdbd-72542afb4044/BobiBowl_Javanese%20Chicken%20Satay%205%20pcs_AhmadTar.jpg/:/cr=t:0%25,l:0.12%25,w:99.75%25,h:100%25/rs=w:720,h:541,cg:true"
                    }
                    alt={`${menu.name} | ${company?.name}`}
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute bottom-3 right-3 z-10">
                    <p className="text-xs text-gray-50 font-semibold">AED {menu.price}</p>
                </div>
                <div className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b bg-gray-950/10 to-gray-950/50 z-[1]" />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-semibold text-wrap">{menu.name}</h3>
                <p className="text-[11px] text-gray-500 leading-3.5 text-wrap">{menu.description}</p>
            </div>
        </button>
    );
}
