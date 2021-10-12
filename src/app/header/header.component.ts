import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/auth";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    firebase.getAuth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth = true;
        }
        else{
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
  }

}
