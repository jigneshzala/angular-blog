import { Injectable } from "@angular/core";
import { CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private localStorageService: LocalStorageService,private router: Router) {}

  canActivate(_: any, state: RouterStateSnapshot) {
    return this.checkIfCanNavigate(state.url);
  }

  private checkIfCanNavigate(url: string): boolean {
   /*  if (this.auth.isAuthenticated) {
      return true;
    } */

    if(this.localStorageService.getLocalStorage("blog_auth_token")){
          
      return true;
    }
    this.auth.redirectUrl = url;
    this.router.navigate(["/login"]);
    return false;
  }
}

@Injectable({
  providedIn: "root",
})
export class GuestGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(_: any, state: RouterStateSnapshot) {
    return this.checkIfCanNavigate(state.url);
  }

  private checkIfCanNavigate(url: string): boolean {
    if (this.auth.isAuthenticated) {
      this.router.navigate(["/posts"]);
      return false;
    }

    return true;
  }
}
