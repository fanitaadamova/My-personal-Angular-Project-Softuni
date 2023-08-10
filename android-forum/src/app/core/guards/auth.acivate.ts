import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';


import { Observable } from 'rxjs';
import { UserService } from 'src/app/features/user/user.serves';

@Injectable({ providedIn: 'root' })

export class AuthActivate implements CanActivate {
    constructor(private userService: UserService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | boolean
        | UrlTree
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree> {
                       
        return this.userService.isLogged;
    }

}