import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badges from '.';

describe('Badges', () => {
  test('match snapshot', () => {
    expect(toJson(shallow(<Badges />))).toMatchSnapshot();
  });

  test('render Text', () => {
    expect(shallow(<Badges>Hello</Badges>).text()).toBe('Hello');
  });
});
