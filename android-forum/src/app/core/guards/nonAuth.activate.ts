import { Injectable, OnDestroy } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { map } from 'rxjs/operators';
import { UserService } from 'src/app/features/user/user.serves';


@Injectable({
    providedIn: 'root',
})
export class NonAuthActivated implements CanActivate, OnDestroy {
    private ngUnsubscribe = new Subject<void>();

    constructor(private userService: UserService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return new Promise<boolean | UrlTree>((resolve) => {
            this.userService.user$.pipe(
                map((user) => {
                    const hasUser = !!user?._id;

                    if (!hasUser) {
                        resolve(true);
                    } else {
                        resolve(this.router.navigate(['/home']));
                    }
                })
            ).subscribe({
                next: () => { },
                error: (error) => {
                    console.log(`Error: ${ error }`);
                }
            });
        })
    }
    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}