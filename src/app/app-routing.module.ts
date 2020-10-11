import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { HomeAllComponent } from './home-all/home-all.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from "./notfound/notfound.component";
import { PostsComponent } from "./posts/posts.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsidebarComponent } from './productsidebar/productsidebar.component';
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { SelectedTeamComponent } from './selected-team/selected-team.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TeamComponent } from "./team/team.component";
SelectedTeamComponent
const routes: Routes = [
  // {path:'',component:}
  {path:'HomeAll' , component:HomeAllComponent ,
children:[
  { path: "", redirectTo:'home', pathMatch: "full" } ,
  { path: "home", component: HomeComponent},
   { path: "products", component:ProductListComponent },
  { path: "products/:id", component : ProductDetailsComponent },
  //
  {path:'' ,component:SidebarComponent ,outlet:'sideBar' },
  
  {path:'product-side-menu',component:ProductsidebarComponent ,outlet:'sideBar' }
]},
 
  { path: "home", component: HomeComponent},
  


  { path: "reactive", component: ReactiveFormsComponent, pathMatch: "full" },
  { path: "post", component: PostsComponent ,pathMatch: "full" },
  { path: "redirect", redirectTo: "reactive", pathMatch: "full" },
  { path: "team/:id", component: TeamComponent ,
    children:[
      {path:'' ,redirectTo:'add' ,pathMatch:'full'},
      {path:'add' ,component: AddTeamComponent },
      {path:'edit' ,component:EditTeamComponent}
      
    ]
  },
  { path: "team/:id/selectedTeam", component: SelectedTeamComponent , pathMatch: "full"  },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
