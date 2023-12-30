import {
  DocumentData,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

interface Card {
  id: string;
  data: DocumentData;
}
export const useFetch = () => {
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    const q = query(collection(db, "cards"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedNotes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setCards(fetchedNotes);
    });
    return () => unsubscribe();
  }, []);
  return { cards };
};
