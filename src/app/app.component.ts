import { Component, OnInit } from '@angular/core';
import 'dotenv/config'
import { enableProdMode } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';
import { environment } from './environments/environments'

if (environment.production) {
  enableProdMode();
}

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

      apiKey: environment['apiKey'],
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