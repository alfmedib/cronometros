import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { DesfibriladorComponent } from './componentes/desfibrilador/desfibrilador.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { CrodesfibrilarComponent } from './componentes/crodesfibrilar/crodesfibrilar.component';
import { ForNumberPipe } from './for-number.pipe';
import { CroAdrenalinaComponent } from './componentes/cro-adrenalina/cro-adrenalina.component';
import { CroAmiodaronaComponent } from './componentes/cro-amiodarona/cro-amiodarona.component';
import { CroAtropinaComponent } from './componentes/cro-atropina/cro-atropina.component';
import { FraccionCTComponent } from './componentes/fraccion-c-t/fraccion-c-t.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    DesfibriladorComponent,
    NotFoundPageComponent,
    CrodesfibrilarComponent,
    ForNumberPipe,
    CroAdrenalinaComponent,
    CroAmiodaronaComponent,
    CroAtropinaComponent,
    FraccionCTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
