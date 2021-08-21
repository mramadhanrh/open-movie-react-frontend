import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import SearchBar from '../../components/molecules/SearchBar';
import MovieCardList from '../../components/organisms/MovieCardList';
import PageFrame from '../../components/templates/PageFrame';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { MovieResultType } from '../../interfaces/movie';
import { loadMovieInitList, loadMovieAddList } from '../../redux/actions/movie';
import { AppStateType } from '../../redux/reducers';
import { movieListSelector } from '../../redux/selectors/movie';

type SearchSubmitType = Parameters<typeof SearchBar>[0]['onSubmit'];

const Home: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<AppStateType, null, AnyAction>>();
  const movieList = useSelector(movieListSelector);
  const [searchData, setSearchData] = useState({
    title: '',
    type: MovieResultType.Movie,
  });
  const [page, setPage] = useState(1);
  const [movieLoading, setMovieLoad] = useState(false);
  const [isEndOfPages, setEndOfPages] = useState(false);

  useInfiniteScroll(async () => {
    if (movieLoading || isEndOfPages) return;

    const { title, type } = searchData;
    setMovieLoad(true);
    const [, e] = await dispatch(loadMovieAddList(title, page, type));
    setPage((s) => s + 1);
    setMovieLoad(false);

    if (e) setEndOfPages(true);
  });

  const handleSearchSubmit: SearchSubmitType = async (form) => {
    if (movieLoading) return;
    const { title, type } = form;
    setMovieLoad(true);
    setSearchData(form);
    await dispatch(loadMovieInitList(title, 1, type));
    setPage((s) => s + 1);
    setMovieLoad(false);
    setEndOfPages(false);
  };

  return (
    <PageFrame>
      <SearchBar onSubmit={handleSearchSubmit} />
      <MovieCardList data={movieList} />
      {movieLoading && <h1>Loading Data... </h1>}
      {isEndOfPages && <h1>Reach end of page</h1>}
    </PageFrame>
  );
};

export default Home;
