import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class MediaService {
  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  API_URL = "";

  getImages() {
    return this.http.get(`${this.API_URL}images`);
  }

  deleteImageById(id) {
    return this.http.delete(`${this.API_URL}images/${id}`);
  }
}
