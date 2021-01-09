import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { exctractApiError } from "src/app/shared/helpers/functions";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from "moment";

const jwt = new JwtHelperService();

class DecodedToken {
  exp: number = 0;
  username: string = "";
  userId: string = "";
}

// '16:36' < '18:36' - not expired!
// '16:36' < '15:36' - expired!
@Injectable({
  providedIn: "root",
})
export class AuthService {
  private decodedToken: DecodedToken;
  redirectUrl: string;

  constructor(private http: HttpClient) {
    this.decodedToken = new DecodedToken();
  }

  API_URL = "http://127.0.0.1:3000/";

  login(formData: any) {
    return this.http.post(`${this.API_URL}users/login`, formData).pipe(
      map((token: string) => {
        this.saveToken(token);
        return token;
      }),
       catchError((resError: HttpErrorResponse) =>
        throwError(exctractApiError(resError))
      ) 
    );
  }

  logout() {
    localStorage.removeItem("blog_auth_token");
    this.decodedToken = new DecodedToken();
  }

  checkAuthentication(): boolean {
    const authToken = localStorage.getItem("blog_auth_token");
    if (!authToken) {
      return false;
    }

    const decodedToken = jwt.decodeToken(authToken);
    if (!decodedToken) {
      return false;
    }

    this.decodedToken = decodedToken;
    return true;
  }

  private saveToken(token: string): string | null {
    const decodedToken = jwt.decodeToken(token);
    if (!decodedToken) {
      return null;
    }

    this.decodedToken = decodedToken;

    localStorage.setItem("blog_auth_token", token);
    return token;
  }

  get authToken(): string {
    return localStorage.getItem("blog_auth_token") || "";
  }
  get isAuthenticated(): boolean {
    return moment().isBefore(this.expiration);
  }

  get username(): string {
    return this.decodedToken.username;
  }

  private get expiration() {
    return moment.unix(this.decodedToken.exp);
  }
}
