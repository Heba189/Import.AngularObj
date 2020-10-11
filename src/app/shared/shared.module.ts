import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyBtnComponent } from "./my-btn/my-btn.component";
import { NavComponent } from "./nav/nav.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "app/app-routing.module";

@NgModule({
  declarations: [MyBtnComponent, NavComponent],
  imports: [CommonModule, RouterModule, AppRoutingModule],
  exports: [MyBtnComponent, NavComponent],
})
export class SharedModule {}
