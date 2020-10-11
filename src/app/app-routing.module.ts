import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { NotfoundComponent } from "./notfound/notfound.component";
import { PostsComponent } from "./posts/posts.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { SelectedTeamComponent } from './selected-team/selected-team.component';
import { TeamComponent } from "./team/team.component";
SelectedTeamComponent
const routes: Routes = [
  // {path:'',component:}
  { path: "reactive", component: ReactiveFormsComponent, pathMatch: "full" },
  { path: "post", component: PostsComponent },
  { path: "redirect", redirectTo: "reactive", pathMatch: "full" },
  { path: "team/:id", component: TeamComponent ,
    children:[
      {path:'' ,redirectTo:'add' ,pathMatch:'full'},
      {path:'add' ,component: AddTeamComponent},
      {path:'edit' ,component:EditTeamComponent}
      
    ]
  },
  { path: "team/:id/selectedTeam", component: SelectedTeamComponent  },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
