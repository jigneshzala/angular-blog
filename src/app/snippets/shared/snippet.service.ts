import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SnippetService {
  constructor(private http: HttpClient) {}
  API_URL = "/api/v1/";

  getSnippets() {
    return this.http.get(`${this.API_URL}snippets`);
  }
  createSnippet(newPost) {
    return this.http.post(`${this.API_URL}snippets`, newPost);
  }

  updateSnippet(id: string, postData:any) {
    return this.http.patch(`${this.API_URL}snippets/${id}`, postData);
  }

  getSnippetBySlug(slug) {
    return this.http.get(`${this.API_URL}snippets/by_slug/${slug}`);
  }
  
  getSnippetByCategory(category) {
    return this.http.get(`${this.API_URL}snippets/by_category/${category}`);
  }

  deleteSnippet(id) {
    return this.http.delete(`${this.API_URL}snippets/${id}`);
  }
}
