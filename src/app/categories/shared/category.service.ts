import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  // API_URL = "http://127.0.0.1:3000/";
  API_URL = "/api/v1/";

  getPostByCateogry(category: string) {
    return this.http.get(`${this.API_URL}posts?category=${category}`);
  }
  getAllCateogry() {
    return this.http.get(`${this.API_URL}categories`);
  }
  /*  createPost(newPost) {
    return this.http.post(`${this.API_URL}posts`, newPost);
  }
  getPostById(postId) {
    return this.http.get(`${this.API_URL}posts/${postId}`);
  } */
}
