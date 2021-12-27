import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {
  years = [2021, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2010]
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genre: ""

  }


  constructor(private router: Router, private movieService: MovieService, private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
      this.sharedService.showMessage('Filme cadastrado com sucesso!')
      this.router.navigate(["/movies"]);
    })
  }

  cancel() {
    this.router.navigate(['/movies'])
  }

}
