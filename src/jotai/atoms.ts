import { atom } from "jotai";

/**
 * the toast message is set when updating or deleting a card, the website redirects you to my-cards page and
 * and the toast message is shown. The toast message is also set to null after it is displayed once.
 */
export const toastAtom = atom<string | null>(null);

/**
 * the drawer atom is used for the hamburger menu to open and close the menu in small screens.
 */
export const drawerAtom = atom<boolean>(false);
