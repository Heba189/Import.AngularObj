import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class logService {
  log() {
    console.log("Hello heba");
  }
}
