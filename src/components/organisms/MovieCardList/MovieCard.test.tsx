import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieCardList from '.';
import { MovieItem, MovieResultType } from '../../../interfaces/movie';
import MovieCard from '../../molecules/MovieCard';

const mockData: MovieItem[] = [
  {
    Title: 'Captain Marvel',
    Year: '2019',
    imdbID: 'tt4154664',
    Type: MovieResultType.Movie,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
  },
  {
    Title: 'Marvel One-Shot: Agent Carter',
    Year: '2013',
    imdbID: 'tt3067038',
    Type: MovieResultType.Movie,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
  },
  {
    Title: 'Marvel One-Shot: All Hail the King',
    Year: '2014',
    imdbID: 'tt3438640',
    Type: MovieResultType.Movie,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
  },
  {
    Title: 'Marvel One-Shot: Item 47',
    Year: '2012',
    imdbID: 'tt2247732',
    Type: MovieResultType.Movie,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
  },
  {
    Title:
      "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
    Year: '2011',
    imdbID: 'tt2011109',
    Type: MovieResultType.Movie,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
  },
];

describe('MovieCardList', () => {
  const listComp = <MovieCardList data={mockData} />;
  test('match snapshot', () => {
    expect(toJson(shallow(listComp))).toMatchSnapshot();
  });

  test('count match with data', () => {
    expect(shallow(listComp).find(MovieCard).length).toBe(mockData.length);
  });
});
