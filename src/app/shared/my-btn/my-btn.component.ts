import { Component, OnInit } from "@angular/core";
import { logService } from "@app/services/log.services";
@Component({
  selector: "app-my-btn",
  templateUrl: "./my-btn.component.html",
  styleUrls: ["./my-btn.component.css"],
})
export class MyBtnComponent implements OnInit {
  constructor(private logService: logService) {}

  ngOnInit() {}
  Mylog() {
    this.logService.log();
  }
}
