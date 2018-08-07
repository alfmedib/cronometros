import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegisterPageComponent} from './componentes/register-page/register-page.component';
import { DesfibriladorComponent } from './componentes/desfibrilador/desfibrilador.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent,},
  { path: 'desfibrilador', component: DesfibriladorComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
