import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { Key } from "protractor";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { delay, map } from "rxjs/operators";
export function usernamevalidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return checkUserName().pipe(
      map((res) => {
        console.log("THIS IS RES", res);
        return res.username === control.value ? { usernameExist: true } : null;
      })
    );
  };

  function checkUserName(): Observable<any> {
    return ajax
      .getJSON("https://jsonplaceholder.typicode.com/users/1")
      .pipe(delay(1000));
  }
}
