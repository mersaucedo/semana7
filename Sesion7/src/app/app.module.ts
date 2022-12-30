import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavbarModule } from './navbar/navbar.module';

import { CrewModule } from './crew/crew.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,

    CrewModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
