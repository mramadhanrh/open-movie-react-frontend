import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import SearchBar from '.';
import defaultTheme from '../../../constants/theme';

describe('SearchBar', () => {
  const mockFn = jest.fn();
  const searchComp = (
    <ThemeProvider theme={defaultTheme}>
      <SearchBar onSubmit={mockFn} />
    </ThemeProvider>
  );
  test('match snapshot', () => {
    expect(toJson(shallow(searchComp))).toMatchSnapshot();
  });
});
