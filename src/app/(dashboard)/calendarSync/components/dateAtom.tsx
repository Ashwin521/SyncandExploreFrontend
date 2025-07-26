import { atom } from "jotai";

export const selectedDateAtom = atom<string[]>([]);

export const calendarPopupAtom = atom({
  open: false,
  targetId: null as string | null,
  clicked: false,
});
