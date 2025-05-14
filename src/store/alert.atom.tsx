import { atom } from "jotai";

interface Alert {
    type: "success" | "warning" | "error" | null;
    title: string;
    message: string;
}
export const alertAtom = atom<Alert | null>(null);
