import {Injectable} from '@angular/core';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }
  auth = firebase.getAuth();

  createNewUser(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.createUserWithEmailAndPassword(this.auth, email, password).then(
          ()=> {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      });
  }

  signin(email: string, password: string) {
    return new Promise<void>(
      (resolve, reject) => {
        firebase.signInWithEmailAndPassword(this.auth, email, password).then(
          ()=> {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      });
  }

  signOut(){
    firebase.signOut(this.auth).then();
  }

}
