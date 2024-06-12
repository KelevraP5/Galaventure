import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {LorePagesModule} from "./lorePages/lorePages.module";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    LorePagesModule
  ],
  providers: [],
})
export class SharedModule { }
