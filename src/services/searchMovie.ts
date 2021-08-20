import { AxiosResponse } from 'axios';
import { endpoint } from '../constants/apiRoutes';
import { MovieSearchResponse, MovieResultType } from '../interfaces/movie';
import axiosInstance from '../utils/axiosInstance';

export const getMovieList = async (
  search: string,
  page: number,
  type?: MovieResultType,
): Promise<AxiosResponse<MovieSearchResponse>> => {
  const res = await axiosInstance.omdb.get<MovieSearchResponse>(
    endpoint.omdbApi,
    {
      params: {
        s: search,
        page,
        type,
      },
    },
  );

  if (res.data.Error) throw res;

  return res;
};
