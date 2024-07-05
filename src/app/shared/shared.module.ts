import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
})
export class SharedModule { }
