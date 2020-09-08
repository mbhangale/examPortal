import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './Admin/adminpage.component';
import { UserComponent } from './user/user.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { UserlandingPageComponent } from './userlanding-page/userlanding-page.component';
const routes: Routes = [
  {path:"register",  component:RegisterComponent},
  {path:"home",  component:HomeComponent},
  {path:"adminPage",  component:AdminpageComponent},
  {path:"userPage",  component:UserComponent},
  {path:"user",  component:UserPageComponent},
  {path:"adminLandingPage",  component:AdminLandingPageComponent},
  {path:"userLandingPage",  component:UserlandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
