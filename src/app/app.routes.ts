import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoreComponent} from "./pages/lore/lore.component";
import {MjComponent} from "./pages/mj/mj.component";
import {ReglesComponent} from "./pages/regles/regles.component";
import {JoueurComponent} from "./pages/joueur/joueur.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {authGuard} from "./helpers/auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

  {
    path: "lore",
    component: LoreComponent
  },

  {
    path: "regles",
    component: ReglesComponent
  },

  {
    path: "mj",
    component: MjComponent,
    canActivate: [authGuard]
  },

  {
    path: "joueur",
    component: JoueurComponent,
    canActivate: [authGuard]
  },

  {
    path: "auth",
    component: AuthComponent
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
