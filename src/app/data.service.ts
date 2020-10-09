import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core/testing";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService<T> {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}
  get(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }
  post(post: T) {
    return this.http.post<T>(this.url, JSON.stringify(post));
  }
  delete(postId: string) {
    return this.http.delete<T>(this.url + `/${postId}`);
  }
  update(post: T) {
    return this.http.put<T>(this.url + "/", post);
  }
}
