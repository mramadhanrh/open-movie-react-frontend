import { MovieDetailResponse, MovieItem } from '../../interfaces/movie';
import { MovieAction, MovieType } from '../types/movie';

interface MovieState {
  list: MovieItem[];
  detail: Record<string, MovieDetailResponse>;
}

const initialState = {
  list: [],
  detail: {},
};

const { SetMovieList, AddMovieList, SetMovieDetail } = MovieType;

const movie = (
  state: MovieState = initialState,
  action: MovieAction,
): MovieState => {
  const { type, payload } = action;

  const setMovieList = (): MovieState => ({
    ...state,
    list: payload as MovieItem[],
  });

  const addMovieList = (): MovieState => ({
    ...state,
    list: [...state.list, ...((payload as MovieItem[]) || [])],
  });

  const setMovieDetail = (): MovieState => {
    const castPayload = payload as MovieDetailResponse;
    return {
      ...state,
      detail: {
        ...state.detail,
        [castPayload.imdbID]: castPayload,
      },
    };
  };

  switch (type) {
    case SetMovieList:
      return setMovieList();
    case AddMovieList:
      return addMovieList();
    case SetMovieDetail:
      return setMovieDetail();
    default:
      return state;
  }
};
export default movie;
