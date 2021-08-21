import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '.';
import defaultTheme from '../../../constants/theme';

describe('Input', () => {
  test('match snapshot', () => {
    expect(toJson(shallow(<Input theme={defaultTheme} />))).toMatchSnapshot();
  });

  test('controlled value match with input text', () => {
    const input = mount(
      <Input theme={defaultTheme} onChange={() => {}} value="Hello" />,
    );
    input.getDOMNode<HTMLInputElement>().value = 'Hi';
    input.simulate('change');
    expect(input.getDOMNode<HTMLInputElement>().value).toBe('Hello');
  });

  test('uncontrolled value match with input test', () => {
    const input = mount(
      <Input theme={defaultTheme} onChange={() => {}} defaultValue="Hello" />,
    );
    input.getDOMNode<HTMLInputElement>().value = 'Hi';
    input.simulate('change');
    expect(input.getDOMNode<HTMLInputElement>().value).toBe('Hi');
  });
});
