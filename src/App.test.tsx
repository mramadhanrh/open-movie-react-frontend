import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from './App';

test('Routes match snapshot', () => {
  const wrapper = shallow(<App />);

  // Simulate scenario: to inform when routes added/removed/changed by peers
  expect(wrapper.find(Route).map((node) => node.prop('path')))
    .toMatchInlineSnapshot(`
    Array [
      "/",
      "/:movieId",
    ]
  `);
});
