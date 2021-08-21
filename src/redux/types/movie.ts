import { MovieItem } from '../../interfaces/movie';

export enum MovieType {
  SetMovieList = '@movie/set-list',
  AddMovieList = '@movie/add-list',
}

export interface MovieSetList {
  type: MovieType.SetMovieList;
  payload: MovieItem[];
}

export interface MovieAddList {
  type: MovieType.AddMovieList;
  payload: MovieItem[];
}

export type MovieAction = MovieSetList | MovieAddList;
