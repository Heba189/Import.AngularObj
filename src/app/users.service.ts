import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { User } from './models/user';
@Injectable({
  providedIn: "root",
})
export class UsersService extends DataService<User> {
  constructor(http: HttpClient) {
    super("https://jsonplaceholder.typicode.com/users", http);
  }
}
