import { DocumentData, collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

interface Card {
    id: string;
    data: DocumentData
}
export const useUserCards = (email: string | null | undefined) => {
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    const q = query(collection(db, "cards"), where("userEmail", "==", email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedNotes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setCards(fetchedNotes);
    });
    return () => unsubscribe();
  }, [email]);
  return { cards };
};
