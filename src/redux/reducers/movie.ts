import { MovieItem } from '../../interfaces/movie';
import { MovieAction, MovieType } from '../types/movie';

interface MovieState {
  list: MovieItem[];
}

const initialState = {
  list: [],
};

const { SetMovieList } = MovieType;

const movie = (
  state: MovieState = initialState,
  action: MovieAction,
): MovieState => {
  const { type, payload } = action;

  const setMovieList = (): MovieState => ({
    ...state,
    list: payload,
  });

  const addMovieList = (): MovieState => ({
    ...state,
    list: [...state.list, ...(payload || [])],
  });

  switch (type) {
    case SetMovieList:
      return setMovieList();
    default:
      return state;
  }
};
export default movie;
