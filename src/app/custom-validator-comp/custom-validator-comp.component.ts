import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { from } from "rxjs";

import { validateName } from "../validators/name.validator";
import { ValidatePassword } from "../validators/password.validator";
@Component({
  selector: "app-custom-validator-comp",
  templateUrl: "./custom-validator-comp.component.html",
  styleUrls: ["./custom-validator-comp.component.css"],
})
export class CustomValidatorCompComponent implements OnInit {
  myForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  constructor() {
    this.initFormControl();
    this.createForm();
  }

  ngOnInit() {}

  initFormControl() {
    this.firstName = new FormControl("", [
      Validators.required,
      validateName(/[0-9]/g),
    ]);
    this.lastName = new FormControl("");
    this.password = new FormControl("");
    this.confirmPassword = new FormControl("");
  }

  createForm() {
    this.myForm = new FormGroup(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        confirmPassword: this.confirmPassword
      },
      ValidatePassword('password','confirmPassword')
    );
  }
}
