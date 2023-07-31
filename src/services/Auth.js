import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@utils/firebase/config";

export class Auth {
  constructor() {
    this.auth = auth;
  }

  signUp(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut() {
    return signOut(this.auth);
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }

  getAuthSubsciption(callback) {
    return this.auth.onAuthStateChanged(callback);
  }
}
