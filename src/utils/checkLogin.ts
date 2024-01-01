import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { User } from "firebase/auth";

/**
 * checks whether the user is logged in or not using firebase hook and returns an array of the
 * login status and the user data.
 */

export const checkLogin = (): [boolean, User | null] => {
  const [user] = useAuthState(auth);
  if (!user) return [false, null];
  return [true, user];
};
