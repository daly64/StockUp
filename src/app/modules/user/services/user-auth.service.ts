import {inject, Injectable} from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup, signOut, user} from "@angular/fire/auth";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private auth: Auth = inject(Auth);
  private provider = new GoogleAuthProvider();
  user$ = user(this.auth);

  isLogin = this.user$.pipe(map((user) => !!user))


  login() {
    signInWithPopup(this.auth, this.provider).then((result) => {

      return GoogleAuthProvider.credentialFromResult(result);
    })
  }

  logout() {
    signOut(this.auth).then(() => {
      // console.log('signed out');
      // this.isLogin.subscribe(s => console.log(s))

    }).catch((error) => {
      console.log('sign out error: ' + error);

    })
  }
}
