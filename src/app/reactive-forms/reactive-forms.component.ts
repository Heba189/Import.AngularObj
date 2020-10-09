import { Component, OnInit } from "@angular/core";
import { UniqunessValidator } from "../validators/uniqness.validators";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { from } from "rxjs";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.css"],
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl();
  profileForm: FormGroup;
  // profileForm = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //   }),
  // });
  //instead of first formgroup
  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: "",
      email: [
        "",
        [Validators.email, Validators.pattern(".*com$")],
        UniqunessValidator.checkUniquness,
      ],
      address: this.fb.group({
        city: "",
        street: ["", Validators.minLength(3)],
      }),
    });

    this.profileForm.valueChanges.subscribe((changes) => {
      console.log("changes", changes);
      if (isNaN(changes.lastName)) {
        this.profileForm.patchValue({
          lastName: changes.lastName.replace(/[a-zA-Z]/g, ""),
        });
      }
    });
    this.name.valueChanges.subscribe((changes) =>
      console.log("changes is", changes)
    );
  }
  get firstName() {
    return this.profileForm.get("firstName");
  }
  get email() {
    return this.profileForm.get("email");
  }
  updateValue() {
    this.name.setValue("hello heba");
  }
  onSubmit() {
    console.log(this.profileForm.value);
    this.profileForm.value.reset;
    this.email.disable();
    setTimeout(() => {
      this.email.enable();
    }, 3000);

    return this.profileForm.setErrors({ invalidLogin: true });
  }
  updateForm() {
    this.profileForm.setValue({
      firstName: "Heba",
      lastName: "Abdou",
      address: {
        street: "123",
        city: "ismailia",
      },
    });
  }
  ResetForm() {
    this.profileForm.reset({
      firstName: "",
      lastName: "",
      address: {
        street: "",
        city: "",
      },
    });
  }

  ngOnInit() {}
}
