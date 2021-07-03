import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BrowserStateInterceptor implements HttpInterceptor {
  constructor(private transferState: TransferState) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    console.log('mthod=>',req);
     if (req.method !== "GET") {
      return next.handle(req);
    } 
//To Allow callin GET METHOD
    if(req.method === "GET" && req.url=='https://nodeblog-admin.herokuapp.com/api/v1/posts'){
      console.log(req.url);
      return next.handle(req);
    }

    const storedResponse: string = this.transferState.get(
      makeStateKey(req.url),
      null
    );

    if (storedResponse) {
      const response = new HttpResponse({ body: storedResponse, status: 200 });
      return of(response);
    }

    return next.handle(req);
  }
}
