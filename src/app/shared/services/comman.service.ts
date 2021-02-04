import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommanService {
  constructor() {}

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
