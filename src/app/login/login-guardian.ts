import {ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class LoginGuardian {

    constructor(private login:LoginService,private router:Router){

    }

    canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

        const isLoggedIn = this.login.estaLogueado();
        
        if (this.login.estaLogueado()) {
            return true //Esta logueado el usuario
        }
        else{
            this.router.navigate(["login"])
            return false //No esta logueado el usuario
        }
    }
}