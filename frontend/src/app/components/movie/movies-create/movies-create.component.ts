import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {

  movie: Movie = {
    title: 'Nome do filme',
    director: 'Nome do Diretor',
    year: '2021',
    genre: 'Comédia'

  }


  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    console.log('Salvar')
    this.movieService.create(this.movie).subscribe(() => {
      this.router.navigate(["/movies"]);
    })
  }

  cancel() {
    this.router.navigate(['/movies'])
  }

}
