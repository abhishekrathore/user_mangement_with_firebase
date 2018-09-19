import React from "react";
import enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";
import { PersistGate } from 'redux-persist/integration/react'
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});


describe("App Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <PersistGate loading={null} persistor={store}>
            <App />
          </PersistGate>
        </Provider>
      ).exists()
    ).toBe(true);
  });
});