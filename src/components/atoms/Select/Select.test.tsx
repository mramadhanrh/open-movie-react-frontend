import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import Select, { Option } from '.';
import defaultTheme from '../../../constants/theme';

describe('Select', () => {
  const selectComp = (
    <ThemeProvider theme={defaultTheme}>
      <Select defaultValue={1}>
        <Option value={1}>Value 1</Option>
        <Option value={2}>Value 2</Option>
        <Option value={3}>Value 3</Option>
      </Select>
    </ThemeProvider>
  );

  test('match snapshot', () => {
    expect(toJson(shallow(selectComp))).toMatchSnapshot();
  });

  test('can select item', () => {
    const wrapper = mount(selectComp);
    expect(wrapper.getDOMNode<HTMLSelectElement>().value).toBe('1');
    wrapper.getDOMNode<HTMLSelectElement>().value = '2';
    wrapper.simulate('change');
    expect(wrapper.getDOMNode<HTMLSelectElement>().value).toBe('2');
    wrapper.getDOMNode<HTMLSelectElement>().value = '3';
    wrapper.simulate('change');
    expect(wrapper.getDOMNode<HTMLSelectElement>().value).toBe('3');
  });
});
