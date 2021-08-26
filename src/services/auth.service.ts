import { Injectable } from "@nestjs/common";
import { app } from "./firebase";

@Injectable()
export class AuthService {
  async auth(email: string, pass: string) {
    return await app.auth().signInWithEmailAndPassword(email, pass);
  }
  async register(email: string, pass: string) {
    return await app.auth().createUserWithEmailAndPassword(email, pass);
  }
  async createUser(uid) {
    return await app.firestore().collection("Users").doc(uid).set({});
  }
}
