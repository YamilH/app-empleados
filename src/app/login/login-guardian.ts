import {ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class LoginGuardian {

    constructor(private login:LoginService,private router:Router){

    }

    canActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

        const router = inject(Router);
         const loginservice = inject(LoginService);
        
        if(LoginService.estaLogueado()){
            return true //Esta logueado el usuario
        }
        else{
            this.router.navigate(["login"])
            return false //No esta logueado el usuario
        }
    }
}