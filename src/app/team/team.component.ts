import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"],
})
export class TeamComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute, private router: Router) {
    console.log(this.activatedRoute);
  }
  reactive() {
    this.router.navigate(["/reactive"]);
  }
  ngOnInit() {}
}
