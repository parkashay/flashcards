import { DocumentData } from "firebase/firestore";

export interface Card {
    id: string;
    data: DocumentData;
}