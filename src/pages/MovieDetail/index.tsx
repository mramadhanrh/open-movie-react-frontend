import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Badges from '../../components/atoms/Badges';
import MovieCard from '../../components/molecules/MovieCard';
import { InfoWrapper } from '../../components/molecules/MovieCard/style';
import PageFrame from '../../components/templates/PageFrame';
import { MovieEmptyPicture } from '../../constants/movie';
import { loadMovieDetail } from '../../redux/actions/movie';
import { AppStateType } from '../../redux/reducers';
import { movieDetailSelector } from '../../redux/selectors/movie';
import { ContentWrapper, RatingWrapper, RowInfoWrapper } from './style';

const { label: emptyLabel, src: emptySrc } = MovieEmptyPicture;

const MovieDetail: FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch = useDispatch();
  const detail = useSelector((state) =>
    movieDetailSelector(state as AppStateType, movieId),
  );

  useEffect(() => {
    dispatch(loadMovieDetail(movieId));
  }, [dispatch, movieId]);

  if (!detail) return <h1>Loading...</h1>;

  return (
    <PageFrame>
      <ContentWrapper>
        <MovieCard
          id={detail.imdbID}
          title={detail.Title}
          picture={detail.Poster === emptyLabel ? emptySrc : detail.Poster}
          year={detail.Year}
          type={detail.Type}
        />
        <InfoWrapper>
          <RowInfoWrapper>
            <h3>Plot: </h3>
            <p>{detail.Plot}</p>
            <Badges color="coal">Rated: {detail.Rated}</Badges>
            <Badges color="primary">Writer: {detail.Writer}</Badges>
            <Badges color="primary">Release Date: {detail.Released}</Badges>
            <Badges color="primary">Duration: {detail.Runtime}</Badges>
            <Badges color="primary">Genre: {detail.Genre}</Badges>
            <Badges color="primary">Actors: {detail.Actors}</Badges>
            <Badges color="primary">Language: {detail.Language}</Badges>
            <Badges color="primary">Production: {detail.Production}</Badges>

            <h3>Rating: </h3>
            {detail.Ratings.map(({ Source, Value }, i) => (
              <RatingWrapper key={i.toString()}>
                <Badges color="black">{Source}</Badges>
                <Badges>{Value}</Badges>
              </RatingWrapper>
            ))}
          </RowInfoWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </PageFrame>
  );
};

export default MovieDetail;
