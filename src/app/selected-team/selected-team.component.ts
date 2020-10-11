import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-selected-team",
  templateUrl: "./selected-team.component.html",
  styleUrls: ["./selected-team.component.css"],
})
export class SelectedTeamComponent implements OnInit {
  constructor(private router: Router) {}
  back() {
    this.router.navigate(["/team/5"]);
  }
  ngOnInit() {}
}
