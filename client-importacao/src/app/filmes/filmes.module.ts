import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmesComponent } from './filmes.component';
import { FilmeCreditosComponent } from './filme-creditos/filme-creditos.component';
import { FilmesService } from './filmes.service';

@NgModule({
  declarations: [FilmesComponent, FilmeCreditosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FilmesComponent
  ],
  providers: [
    FilmesService
  ]
})
export class FilmesModule { }
