import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from "../../shared/shared.service";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movie-update",
  templateUrl: "./movie-update.component.html",
  styleUrls: ["./movie-update.component.css"],
})
export class MovieUpdateComponent implements OnInit {
  movie: Movie = {
    title: "",
    director: "",
    year: "",
    genre: "",
  };
  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'undefined'
    this.movieService.getById(id).subscribe(response => {
      this.movie = response
    })
  }

  updateMovie(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.sharedService.showMessage("Filme atualizado com sucesso!");
      this.router.navigate(["/movies"]);
    });
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}
