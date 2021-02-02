import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DealService {
  constructor(private http: HttpClient) {
    this.API_URL = environment.apiUrl;
  }

  API_URL = "";

  getDeals() {
    return this.http.get(`${this.API_URL}deals`);
  }
  createDeal(newPost) {
    return this.http.post(`${this.API_URL}deals`, newPost);
  }

  updateDeal(id: string, postData: any) {
    return this.http.patch(`${this.API_URL}deals/${id}`, postData);
  }
  updateDealStatus(id: string, data: any) {
    return this.http.patch(`${this.API_URL}deals/update_status/${id}`, data);
  }

  getDealByCategory(category) {
    return this.http.get(`${this.API_URL}deals/by_category/${category}`);
  }
  getDealById(id) {
    return this.http.get(`${this.API_URL}deals/${id}`);
  }

  deleteDeal(id) {
    return this.http.delete(`${this.API_URL}deals/${id}`);
  }
}
