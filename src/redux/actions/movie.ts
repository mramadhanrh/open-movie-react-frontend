import { AxiosResponse } from 'axios';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import {
  MovieDetailResponse,
  MovieItem,
  MovieResultType,
  MovieSearchResponse,
} from '../../interfaces/movie';
import { getMovieDetailById } from '../../services/movieDetail';
import { getMovieList } from '../../services/searchMovie';
import { AppStateType } from '../reducers';
import {
  MovieAddList,
  MovieSetDetail,
  MovieSetList,
  MovieType,
} from '../types/movie';

export const setMovieList = (list: MovieItem[]): MovieSetList => ({
  type: MovieType.SetMovieList,
  payload: list,
});

export const setAddMovieList = (list: MovieItem[]): MovieAddList => ({
  type: MovieType.AddMovieList,
  payload: list,
});

export const setMovieDetail = (
  detail: MovieDetailResponse,
): MovieSetDetail => ({
  type: MovieType.SetMovieDetail,
  payload: detail,
});

export const loadMovieInitList =
  (search: string, page = 1, type?: MovieResultType) =>
  async (
    dispatch: ThunkDispatch<AppStateType, null, AnyAction>,
  ): Promise<
    [MovieSearchResponse | null, AxiosResponse<MovieSearchResponse> | null]
  > => {
    try {
      const res = await getMovieList(search, page, type);
      dispatch(setMovieList(res.data.Search));

      return [res.data, null];
    } catch (e) {
      return [null, e];
    }
  };

export const loadMovieAddList =
  (search: string, page = 1, type?: MovieResultType) =>
  async (
    dispatch: ThunkDispatch<AppStateType, null, AnyAction>,
  ): Promise<
    [MovieSearchResponse | null, AxiosResponse<MovieSearchResponse> | null]
  > => {
    try {
      const res = await getMovieList(search, page, type);
      dispatch(setAddMovieList(res.data.Search));

      return [res.data, null];
    } catch (e) {
      return [null, e];
    }
  };

export const loadMovieDetail =
  (id: string) =>
  async (
    dispatch: ThunkDispatch<AppStateType, null, AnyAction>,
  ): Promise<
    [MovieDetailResponse | null, AxiosResponse<MovieDetailResponse> | null]
  > => {
    try {
      const res = await getMovieDetailById(id);
      dispatch(setMovieDetail(res.data));

      return [res.data, null];
    } catch (e) {
      return [null, e];
    }
  };
