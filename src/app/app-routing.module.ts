import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OverviewComponent } from './components/overview/overview.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'signup', component: SignupComponent},
  {path: "**", component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OverviewComponent, PagenotfoundComponent, LoginComponent, SignupComponent]
