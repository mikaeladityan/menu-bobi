import { IconSearch } from "@tabler/icons-react";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import { motion as m } from "motion/react";

type propsInputSerach = {
    handle: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
};

export function InputSearch({ handle, value, className }: propsInputSerach) {
    return (
        <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
        >
            <div
                className={twMerge(
                    "flex items-center justify-between border border-gray-300 rounded-full bg-white px-4 py-2 shadow-inner",
                    className
                )}
            >
                <input
                    name="search"
                    type="text"
                    value={value}
                    onChange={handle}
                    placeholder="Search your favourite"
                    className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none"
                />
                <IconSearch size={18} stroke={2} className="text-red ml-2" />
            </div>
        </m.div>
    );
}
