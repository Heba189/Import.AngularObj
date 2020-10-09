import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { usernamevalidator } from "../validators/asyn.validator";

@Component({
  selector: "app-async-validator-comp",
  templateUrl: "./async-validator-comp.component.html",
  styleUrls: ["./async-validator-comp.component.css"],
})
export class AsyncValidatorCompComponent implements OnInit {
  myForm: FormGroup;
  username: FormControl;
  lazyUsename: FormControl;
  constructor() {
    this.initFormControl();
    this.createForm();
  }

  initFormControl() {
    this.lazyUsename = new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [usernamevalidator()],
      updateOn: "blur",
    });
    this.username = new FormControl(
      "",
      [Validators.required],
      [usernamevalidator()]
    );
  }
  createForm() {
    this.myForm = new FormGroup({
      username: this.username,
      lazyUsename: this.lazyUsename,
    });
  }
  ngOnInit() {}
}
