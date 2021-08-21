import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '.';
import defaultTheme from '../../../constants/theme';

describe('Button', () => {
  test('match snapshot', () => {
    expect(toJson(shallow(<Button theme={defaultTheme} />))).toMatchSnapshot();
  });

  test('render text', () => {
    expect(shallow(<Button theme={defaultTheme}>Hello</Button>).text()).toBe(
      'Hello',
    );
  });

  test('is clickable', () => {
    const mockFn = jest.fn();
    const button = shallow(<Button theme={defaultTheme} onClick={mockFn} />);
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
