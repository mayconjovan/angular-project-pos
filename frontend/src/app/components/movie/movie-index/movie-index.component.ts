import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {

  movies!: Movie[];
  displayedColumns: string[] = ['id', 'title', 'director', 'genre', 'year', 'actions'];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.index().subscribe(movies => {
      this.movies = movies;
    })
  }
}
