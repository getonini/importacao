import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EdicaoItemComponent } from './edicao-item/edicao-item.component';
import { FilmesModule } from './filmes/filmes.module';

@NgModule({
  declarations: [
    AppComponent,
    EdicaoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FilmesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
