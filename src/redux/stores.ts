import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const composeEnhancers = composeWithDevTools({
  name: "Open Movie Web Apps",
});

const middleware = applyMiddleware(thunk);

export const stores = createStore(
  reducers,
  process.env.NODE_ENV === "development"
    ? composeEnhancers(middleware)
    : middleware
);
