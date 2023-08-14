import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private loginService:LoginService){
    
  }

  ngOnInit(): void {
    
    firebase.initializeApp({

      apiKey: "AIzaSyB1KWENE8yM-lk6I60qiyvrhNFnx1jJiEM",
      authDomain: "mis-clientes-5059c.firebaseapp.com",
      
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    return this.loginService.logout();
  }
  
}