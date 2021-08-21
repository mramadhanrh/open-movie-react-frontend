import { MovieDetailResponse, MovieItem } from '../../interfaces/movie';

export enum MovieType {
  SetMovieList = '@movie/set-list',
  AddMovieList = '@movie/add-list',
  SetMovieDetail = '@movie/set-detail',
}

export interface MovieSetList {
  type: MovieType.SetMovieList;
  payload: MovieItem[];
}

export interface MovieAddList {
  type: MovieType.AddMovieList;
  payload: MovieItem[];
}

export interface MovieSetDetail {
  type: MovieType.SetMovieDetail;
  payload: MovieDetailResponse;
}

export type MovieAction = MovieSetList | MovieAddList | MovieSetDetail;
