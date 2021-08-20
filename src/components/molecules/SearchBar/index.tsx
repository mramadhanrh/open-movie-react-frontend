import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { MovieResultType } from '../../../interfaces/movie';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Select, { Option } from '../../atoms/Select';
import { Container } from './style';

interface SearchBarProps {
  onSubmit?(form: SearchForm): void;
}

interface SearchForm {
  title: string;
  type: MovieResultType;
}

const { Movie, Series, Episode } = MovieResultType;

const SearchBar: FC<SearchBarProps> = ({ onSubmit = () => {} }) => {
  const [form, setForm] = useState<SearchForm>({
    title: '',
    type: Movie,
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      title: e.target.value,
    });
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      type: e.target.value as MovieResultType,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Movie, Series, Episode title"
          width={300}
          onChange={handleTitleChange}
          value={form.title}
        />
        <Select onChange={handleTypeChange} value={form.type}>
          <Option value={Movie}>Movie</Option>
          <Option value={Series}>Series</Option>
          <Option value={Episode}>Episode</Option>
        </Select>
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};

export default SearchBar;
