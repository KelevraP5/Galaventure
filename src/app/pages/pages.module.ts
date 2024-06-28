import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { JwtInterceptor } from '../helpers/jwt.interceptor';
// import { AuthService } from '../service/auth.service';

import {HomeComponent} from "./home/home.component";
import {LoreComponent} from "./lore/lore.component";
import {SharedModule} from "../shared/shared.module";
import {MjComponent} from "./mj/mj.component";
import {ReglesComponent} from "./regles/regles.component";
import {JoueurComponent} from "./joueur/joueur.component";
import {AuthComponent} from "./auth/auth.component";


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    LoreComponent,
    ReglesComponent,
    MjComponent,
    JoueurComponent,
    AuthComponent,
    SharedModule
  ],
  providers: [
    // AuthService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class PagesModule {}
