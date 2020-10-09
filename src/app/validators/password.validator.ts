import { FormGroup } from "@angular/forms";
import { Key } from "protractor";

export function ValidatePassword(control1: string, control2: string) {
  return (formGroup: FormGroup): { [Key: string]: boolean } | null => {
    const password = formGroup.controls[control1];
    const confirmPassword = formGroup.controls[control2];
    if (
      confirmPassword.dirty &&
      password.dirty &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({
        wrongPassword: true,
      });
    }
    return null;
  };
}
