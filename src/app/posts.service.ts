import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { DataService } from './data.service';
import { User } from './models/user';
@Injectable({
  providedIn: "root",
})
export class PostsService extends DataService<User>{
 
  constructor(http:HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

 
}
