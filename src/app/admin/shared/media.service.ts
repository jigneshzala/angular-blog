import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MediaService {
  constructor(private http: HttpClient) {}

  // API_URL = "http://127.0.0.1:3000/";
  API_URL = "/api/v1/";

  getImages() {
    return this.http.get(`${this.API_URL}images`);
  }

  deleteImageById(id) {
    return this.http.delete(`${this.API_URL}images/${id}`);
  }
}
