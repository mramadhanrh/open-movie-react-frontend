import { AxiosResponse } from 'axios';
import { MovieDetailResponse } from '../interfaces/movie';
import { endpoint } from '../constants/apiRoutes';
import axiosInstance from '../utils/axiosInstance';

export const getMovieDetailById = async (
  id: string,
): Promise<AxiosResponse<MovieDetailResponse>> => {
  const res = await axiosInstance.omdb.get<MovieDetailResponse>(
    endpoint.omdbApi,
    {
      params: {
        i: id,
      },
    },
  );

  if (res.data.Error) throw res;

  return res;
};
