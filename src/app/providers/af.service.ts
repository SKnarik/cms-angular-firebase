import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable() 
export class AfService {
  user: Observable<firebase.User>
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }
   loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider);
   }
   logout(){
    this.afAuth.signOut();
   }
}
