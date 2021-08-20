import { MovieItem } from '../../interfaces/movie';

export enum MovieType {
  SetMovieList = '@move/set-list',
}

export interface MovieSetList {
  type: MovieType.SetMovieList;
  payload: MovieItem[];
}

export type MovieAction = MovieSetList;
