import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './detail/detail.component';
import { RepositoriesComponent } from './repositories/repositories.component';


const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:DetailComponent},
  {path:"repos/:user/:id", component:RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
