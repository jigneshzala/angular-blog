import { HttpClient,HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  // API_URL = "http://127.0.0.1:3000/";
  API_URL = "/api/v1/";

  getPostByCateogry(reqData?) {
    console.log(reqData);
    let params = new HttpParams();

    params = params.append('limit', reqData.limit);
    params = params.append('category', reqData.category);

   /*  for(let key of Object.keys(reqData[0])){
      params= params.set(key, reqData[0][key]) ;
  }
 */
  /*   let query = '';
    if(reqData.category){
      query = `category=${reqData.category}`;
    }
    if(reqData.limit){
      query = `limit=${reqData.limit}`;
    }
     */
    return this.http.get(`${this.API_URL}posts`,{params: params});
  }
  getAllCateogry(reqData?) {
    
    return this.http.get(`${this.API_URL}categories`);
  }
  /*  createPost(newPost) {
    return this.http.post(`${this.API_URL}posts`, newPost);
  }
  getPostById(postId) {
    return this.http.get(`${this.API_URL}posts/${postId}`);
  } */
}
