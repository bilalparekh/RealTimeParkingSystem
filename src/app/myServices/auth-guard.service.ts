import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyAuthenticationService } from '../myServices/my-authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: MyAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    console.log('AuthGuard#canActivate called');
    let url: string = state.url;
    console.log('url', url);
    return this.checkLogin(url);
  };

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['']);
    return false;
  };
}
