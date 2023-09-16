import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterContentComponent } from './Jokes/components/footer-content/footer-content.component';
import { HeaderContentComponent } from './Jokes/components/header-content/header-content.component';
import { JokesCardComponent } from './Jokes/components/jokes-card/jokes-card.component';
import {MaterialModule} from "../shared/material.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    HeaderContentComponent,
    JokesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
