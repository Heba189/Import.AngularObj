import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-form-comp",
  templateUrl: "./template-driven-form-comp.component.html",
  styleUrls: ["./template-driven-form-comp.component.css"],
})
export class TemplateDrivenFormCompComponent implements OnInit {
  @ViewChild("templateForm", { static: false }) myForm: NgForm;

  schoolName: string = "";
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log("forForm", this.myForm);
    setTimeout(() => {
      this.myForm.reset();
    }, 3000);
  }
}
