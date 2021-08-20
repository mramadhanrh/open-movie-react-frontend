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
