import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from "../../shared/shared.service";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-delete",
  templateUrl: "./movie-delete.component.html",
  styleUrls: ["./movie-delete.component.css"],
})
export class MovieDeleteComponent implements OnInit {
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genre: ""
  };
  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'Undefined';
    this.movieService.getById(id).subscribe((response) => {
      this.movie = response;
    });
  }

  deleteMovie(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'Undefined';
    this.movieService.delete(id).subscribe(() => {
      this.sharedService.showMessage("Filme removido com sucesso!");
      this.router.navigate(["/movies"]);
    });
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}
