import { MovieItem } from '../../interfaces/movie';
import { AppStateType } from '../reducers';

export const movieListSelector = (state: AppStateType): MovieItem[] =>
  state.movie.list;
