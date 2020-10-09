import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { from } from "rxjs";
import { PostsService } from "../posts.service";
import { UsersService } from "../users.service";
import { Post } from '../models/post';
import { User } from '../models/user';
@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  users: User[];
  constructor(private http: PostsService, private Http2: UsersService) {
    // this.http.get(this.url).subscribe((response) => {
    //   this.posts = response;
    // });
    this.http.get().subscribe((postsGet) => {
      this.posts = postsGet;
    });

    this.Http2.get().subscribe((usersGet) => {
      this.users = usersGet;
    });
  }

  ngOnInit() {}
}
