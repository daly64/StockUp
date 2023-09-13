export interface appUser {
  // id: string;
  name: string,
  photoURL: string,
  email: string,
  isAdmin: boolean,
  isLogin: boolean,
}

export let defaultAppUser: appUser = { name: "", email: "", photoURL: "", isAdmin: false, isLogin: false}
