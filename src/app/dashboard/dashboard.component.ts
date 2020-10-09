import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  userImg: string;
  placeholder: string;
  data: any[];
  constructor() {
    setTimeout(() => {
      this.userImg =
        "https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg";
      this.data.push({ name: "ahmed", age: 2, speed: 1 });
    }, 3000);
    this.placeholder = "http://via.placeholder.com/150";
    this.data = [
      { name: "Heba", age: 22, speed: 13 },
      { name: "mai", age: 30, speed: 11 },
      { name: "menna", age: 24, speed: 19 },
    ];
  }

  ngOnInit() {}
}
