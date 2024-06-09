import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from "./home/home.component";
import {LoreComponent} from "./lore/lore.component";
import {SharedModule} from "../shared/shared.module";
import {MjComponent} from "./mj/mj.component";
import {ReglesComponent} from "./regles/regles.component";
import {JoueurComponent} from "./joueur/joueur.component";


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
    SharedModule
  ],
  providers: [],
})
export class PagesModule { }
