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
    //To Allow callin GET METHOD
    console.log('mthod=>',req);
     if (req.method !== "GETE") {
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
