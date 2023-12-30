import { signInWithPopup } from "firebase/auth";
import { auth, authProvider } from "../firebase/firebase";

export const login = () => {
  signInWithPopup(auth, authProvider).catch((err) => console.log(err));
};
