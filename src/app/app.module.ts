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
import { RouterModule, Routes } from "@angular/router";
import { TeamComponent } from "./team/team.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { SelectedTeamComponent } from './selected-team/selected-team.component';
import { AddTeamComponent } from './add-team/add-team.component';

import { EditTeamComponent } from './edit-team/edit-team.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeAllComponent } from './home-all/home-all.component';
import { ProductsidebarComponent } from './productsidebar/productsidebar.component';
import { MatListModule } from '@angular/material/list';

// const appRoutes: Routes = [
//   { path: "reactive", component: ReactiveFormsComponent },
//   { path: "post", component: PostsComponent },
// ];
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
    TeamComponent,
    NotfoundComponent,
    SelectedTeamComponent,
    AddTeamComponent,

    EditTeamComponent,

    ProductListComponent,

    ProductDetailsComponent,

    HomeComponent,

    SidebarComponent,

    HomeAllComponent,

    ProductsidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MatButtonModule,
    CoreModule.forRoot(),
    RouterModule,
    BrowserAnimationsModule,
    MatListModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
