import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
export type COLUMN_TYPE = "boxed" | "list";

export const searchingAtom = atom<string>("");
export const columnAtom = atomWithStorage<COLUMN_TYPE>("column", "boxed");
