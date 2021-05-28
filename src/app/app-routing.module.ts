import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletuserComponent } from './deletuser/deletuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { SlidersComponent } from './sliders/sliders.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"services",component:ServicesComponent},
  {path:"contact",component:ContactComponent},
  {path:"admin",component:AdminComponent},
  {path:"course",component:CourseComponent},
  {path:"login",component:LoginComponent},
  {path:"faq",component:FaqComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent,
    children:[{path:"users",component:UserComponent},
    {path:"deletuser",component:DeletuserComponent},
    {path:"edituser",component:EdituserComponent},
    {path:"sliders",component:SlidersComponent},
    {path:"adminhome",component:AdminhomeComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
