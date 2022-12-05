import { signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signInWithEmailPassword = async (email,password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}

export const onSignOut = async () => {
  await signOut(auth);
}