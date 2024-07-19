import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SuccessPopUpComponent} from "./success_popup/success_popup.component";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    SuccessPopUpComponent
  ],
  providers: [],

})
export class SharedModule { }
