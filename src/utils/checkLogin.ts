import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { User } from "firebase/auth";

export const checkLogin = (): [boolean, User | null] => {
  const [user] = useAuthState(auth);
  if (!user) return [false, null];
  return [true, user];
};
