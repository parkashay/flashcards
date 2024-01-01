import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

/**
 *  utility functions to use CRUD operations on the documents in the firestore database.
 */

export const firebaseData = () => {
  const getOneCard = async (id: string) => {
    try {
      const docRef = doc(db, "cards", id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (err) {
      console.error(err);
      return { status: false };
    }
  };

  const createCard = async ({
    question,
    answer,
    userEmail,
  }: {
    question: string;
    answer: string;
    userEmail: string;
  }) => {
    try {
      await addDoc(collection(db, "cards"), {
        question,
        answer,
        userEmail,
      });
      return { status: true };
    } catch (e) {
      console.error("Error adding document: ", e);
      return { status: false };
    }
  };

  const updateCard = async ({
    id,
    question,
    answer,
  }: {
    id: string;
    question: string;
    answer: string;
  }) => {
    try {
      await setDoc(
        doc(db, "cards", id),
        {
          question,
          answer,
        },
        { merge: true }
      );
      return { status: true };
    } catch (err) {
      console.error(err);
      return { status: false };
    }
  };

  const deleteCard = async (id: string) => {
    try {
      await deleteDoc(doc(db, "cards", id));
      return { status: true };
    } catch {
      return { status: false };
    }
  };
  return { createCard, updateCard, deleteCard, getOneCard };
};
