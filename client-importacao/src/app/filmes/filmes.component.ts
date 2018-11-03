import { FilmesService } from './filmes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  nomePortal: string;

  filmes: string[]

  constructor(private filmesService: FilmesService) {
    this.nomePortal = 'Portal de Filmes SC!';
    this.filmes = this.filmesService.getFilmes();  
  }


  ngOnInit() {

  }

}
