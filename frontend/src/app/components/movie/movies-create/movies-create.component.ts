import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "../../shared/shared.service";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";

@Component({
  selector: "app-movies-create",
  templateUrl: "./movies-create.component.html",
  styleUrls: ["./movies-create.component.css"],
})
export class MoviesCreateComponent implements OnInit {
  years = [
    2021, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2010,
  ];
  movie: Movie = {
    title: "",
    director: "",
    genre: "",
    year: ""
  };

  constructor(
    private router: Router,
    private movieService: MovieService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  createForm!: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ["", [Validators.required]],
      director: ["", [Validators.required]],
      genre: ["", [Validators.required]],
      year: ["", [Validators.required]]
    })
  }

  createMovie(): void {
    if(this.createForm.valid) {
      this.movieService.create(this.movie).subscribe(() => {
        this.sharedService.showMessage("Filme cadastrado com sucesso!");
        this.router.navigate(["/movies"]);
      });
    }
  }

  cancel() {
    this.router.navigate(["/movies"]);
  }
}
