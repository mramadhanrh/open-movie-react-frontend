import App from "./App";
import { shallow } from "enzyme";

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.text());
  expect(wrapper.text().includes("Learn React")).toBe(true);
});
