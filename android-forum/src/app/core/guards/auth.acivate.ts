import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


import { Observable } from 'rxjs';
import { UserService } from 'src/app/features/user/user.serves';

@Injectable({ providedIn: 'root' })

export class AuthActivate implements CanActivate {
    constructor(private userService: UserService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
            if(this.userService.isLogged){
               return true;
            }
                       
        return this.router.createUrlTree(['/login'])
        //this.userService.isLogged;
    }

}