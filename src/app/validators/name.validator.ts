import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export function validateName(nameRegx: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    console.log(control);
    if (control.value.match(nameRegx)) {
      return { invalidName: true };
    }
    return null;
  };
}
