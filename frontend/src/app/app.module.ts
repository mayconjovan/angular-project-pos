import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavigationComponent } from "./components/template/navigation/navigation.component";

import { HomeComponent } from "./views/home/home.component";
import { MoviesComponent } from "./views/movies/movies.component";
import { SeriesComponent } from "./views/series/series.component";
import { MoviesCreateComponent } from "./components/movie/movies-create/movies-create.component";
import { SerieCreateComponent } from "./components/serie/serie-create/serie-create.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieIndexComponent } from "./components/movie/movie-index/movie-index.component";
import { MovieUpdateComponent } from "./components/movie/movie-update/movie-update.component";
import { MovieDeleteComponent } from "./components/movie/movie-delete/movie-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    MoviesCreateComponent,
    SerieCreateComponent,
    MovieIndexComponent,
    MovieUpdateComponent,
    MovieDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
