export enum MovieResultType {
  Movie = 'movie',
  Series = 'series',
  Episode = 'episode',
}

export interface MovieItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieResultType;
  Poster: string;
}

export interface MovieSearchResponse {
  Search: MovieItem[];
  totalResults: string;
  Response: 'True' | 'False';
  Error?: string;
}

export interface MovieRating {
  Source: string;
  Value: string;
}

export interface MovieDetailResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: MovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: MovieResultType;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Error?: string;
}
