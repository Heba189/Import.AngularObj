import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DefaultImage } from "./default-image.pipe";
import { SumPipe } from "./sum.pipe";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from "./posts/posts.component";
import { CustomValidatorCompComponent } from "./custom-validator-comp/custom-validator-comp.component";
import { AsyncValidatorCompComponent } from "./async-validator-comp/async-validator-comp.component";
import { DynamicFormCompComponent } from "./dynamic-form-comp/dynamic-form-comp.component";
import { TemplateDrivenFormCompComponent } from "./template-driven-form-comp/template-driven-form-comp.component";
import { from } from "rxjs";
import { SharedModule } from "@app/shared.module";
import { CoreModule } from "@app/core.module";
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DefaultImage,
    SumPipe,
    ReactiveFormsComponent,
    PostsComponent,
    CustomValidatorCompComponent,
    AsyncValidatorCompComponent,
    DynamicFormCompComponent,
    TemplateDrivenFormCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
