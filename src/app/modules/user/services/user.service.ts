import {inject, Injectable} from '@angular/core';
import {Auth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {appUser} from "../models/appUser";
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  currentUser = this.auth.currentUser
  isLogin = !!this.currentUser
  getCurrentAppUser = (): appUser =>
    <appUser>{
      name: this.currentUser?.displayName,
      email: this.currentUser?.email,
      photoURL: this.currentUser?.photoURL,
      isAdmin: false,
      isLogin: this.isLogin,
    }


  getDocUser(path: string) {
    return docData(doc(this.firestore, path), {idField: 'id'}) as Observable<appUser>
  }


  getCollectionUser() {
    return collectionData(collection(this.firestore, 'users'),
      {idField: 'id'}) as Observable<appUser[]>
  }

  async addUser(appUser: appUser) {
    await addDoc(collection(this.firestore, 'users'), appUser)
  }

  async updateUser(appUser: Partial<appUser>, uid: string) {
    await updateDoc(doc(this.firestore, 'users/' + uid), appUser)
  }

  async deleteUser(uid: string) {
    const ref = doc(this.firestore, 'users/' + uid);
    await deleteDoc(ref)
  }
}
