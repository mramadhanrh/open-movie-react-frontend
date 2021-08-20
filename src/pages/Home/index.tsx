import { FC } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../../components/molecules/SearchBar';
import PageFrame from '../../components/templates/PageFrame';
import { loadMovieList } from '../../redux/actions/movie';

type SearchSubmitType = Parameters<typeof SearchBar>[0]['onSubmit'];

const Home: FC = () => {
  const dispatch = useDispatch();

  const handleSearchSubmit: SearchSubmitType = ({ title, type }) => {
    dispatch(loadMovieList(title, 1, type));
  };

  return (
    <PageFrame>
      <SearchBar onSubmit={handleSearchSubmit} />
    </PageFrame>
  );
};

export default Home;
