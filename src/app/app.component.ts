import { Component } from '@angular/core';
import * as firebase from "firebase/app";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCnKD_pYnQKxsVzk0641gpugAWWvXsHxsI",
      authDomain: "bibliotheque-1a156.firebaseapp.com",
      databaseURL: "https://bibliotheque-1a156-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bibliotheque-1a156",
      storageBucket: "bibliotheque-1a156.appspot.com",
      messagingSenderId: "825581390720",
      appId: "1:825581390720:web:47abaf50acff34aaffcf65",
      measurementId: "G-BFDJRZKGBB"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
