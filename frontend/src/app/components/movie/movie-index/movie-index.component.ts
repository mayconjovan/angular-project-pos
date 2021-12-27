import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";
import { Component, OnInit } from "@angular/core";
import { DialogService } from "../../shared/dialog.service";
import { SharedService } from "../../shared/shared.service";

@Component({
  selector: "app-movie-index",
  templateUrl: "./movie-index.component.html",
  styleUrls: ["./movie-index.component.css"],
})
export class MovieIndexComponent implements OnInit {
  movies!: Movie[];
  displayedColumns: string[] = [
    "id",
    "title",
    "director",
    "genre",
    "year",
    "actions",
  ];

  constructor(
    private movieService: MovieService,
    private dialogService: DialogService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.updateMovies();
  }

  updateMovies() {
    this.movieService.index().subscribe((movies) => {
      this.movies = movies;
    });
  }

  onDelete(id: string) {
    this.dialogService
      .openConfirmDioalog("Tem certeza que deseja remover este filme?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.movieService.delete(id).subscribe(() => {
            this.sharedService.showMessage("Filme removido com sucesso!");
            this.updateMovies();
          });
        }
      });
  }
}
