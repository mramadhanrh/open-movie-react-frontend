import { MovieDetailResponse, MovieItem } from '../../interfaces/movie';
import { AppStateType } from '../reducers';

export const movieListSelector = (state: AppStateType): MovieItem[] =>
  state.movie.list;

export const movieDetailSelector = (
  state: AppStateType,
  id: string,
): MovieDetailResponse => state.movie.detail[id];
