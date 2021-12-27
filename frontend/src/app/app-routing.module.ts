import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesCreateComponent } from './components/movie/movies-create/movies-create.component';
import { SerieCreateComponent } from './components/serie/serie-create/serie-create.component';
import { HomeComponent } from './views/home/home.component';
import { MoviesComponent } from './views/movies/movies.component';
import { SeriesComponent } from './views/series/series.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "movies",
  component: MoviesComponent
},
{
  path: "movies/create",
  component: MoviesCreateComponent
},
{
  path: "series",
  component: SeriesComponent
},
{
  path: "serie/create",
  component: SerieCreateComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
