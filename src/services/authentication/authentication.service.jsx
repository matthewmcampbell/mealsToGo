import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const loginRequest = async (email, password) => {
  const auth = getAuth();
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const makeAccount = async (email, password) => {
  const auth = getAuth();
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
