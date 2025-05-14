import { atom } from "jotai";

export const searchingAtom = atom<string>("");
export const columnAtom = atom<"list" | "boxed">("boxed");
