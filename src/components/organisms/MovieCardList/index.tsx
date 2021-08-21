import { FC } from 'react';
import { MovieEmptyPicture } from '../../../constants/movie';
import { MovieItem } from '../../../interfaces/movie';
import MovieCard from '../../molecules/MovieCard';
import { Container } from './style';

interface MovieCardListProps {
  data: MovieItem[];
}

const { label: emptyLabel, src: emptySrc } = MovieEmptyPicture;

const MovieCardList: FC<MovieCardListProps> = ({ data = [] }) => (
  <Container>
    {data.map(({ imdbID, Title, Poster, Year, Type }) => (
      <MovieCard
        key={imdbID}
        id={imdbID}
        title={Title}
        picture={Poster === emptyLabel ? emptySrc : Poster}
        type={Type}
        year={Year}
      />
    ))}
  </Container>
);
export default MovieCardList;
