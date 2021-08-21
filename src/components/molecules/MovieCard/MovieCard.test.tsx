import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MovieCard from '.';
import defaultTheme from '../../../constants/theme';
import { MovieResultType } from '../../../interfaces/movie';

describe('MovieCard', () => {
  const mockFn = jest.fn();
  const cardComp = (
    <MovieCard
      id="1"
      title="Title"
      picture="picture-url"
      type={MovieResultType.Movie}
      year="1998"
      onClick={mockFn}
    />
  );

  test('match snapshot', () => {
    expect(toJson(shallow(cardComp))).toMatchSnapshot();
  });

  test('container is clickable', () => {
    const wrapper = shallow(cardComp);
    wrapper.simulate('click');

    expect(mockFn).toHaveBeenCalled();
  });

  test('render content text', () => {
    const wrapper = mount(cardComp);

    expect(wrapper.text().includes('Title')).toBe(true);
    expect(wrapper.text().includes('1998')).toBe(true);
    expect(wrapper.text().includes(MovieResultType.Movie)).toBe(true);
    expect(wrapper.find('img').prop('src')?.includes('picture-url')).toBe(true);
  });
});
