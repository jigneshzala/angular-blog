import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://a5ae57d94a7f4d77bb83ca1c19ade91e@o911068.ingest.sentry.io/5846090"
});
@Injectable({
  providedIn: 'root'
})
export class SentryErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) { }
  handleError(error: any) {
    const router = this.injector.get(Router);
    //capture error to sentry cloud
    const eventId = Sentry.captureException(error.originalError || error);
    if (Error instanceof HttpErrorResponse) {
    console.log(error.status);
    }
    else {
    console.error("an error occured here mate");
    //ask user to report error if error not server related
    Sentry.showReportDialog({ eventId });
    }
    //navigate to error page
    router.navigate(['error']);
    
    //return error;
    //pass the error if needed
  }
}