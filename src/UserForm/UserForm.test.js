import React from "react";
import enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UserForm from "./";
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import { mapStateToProps, mapDispatchToProps } from './';
const mockStore = configureMockStore();
const store = mockStore({});

describe("UserForm Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <UserForm store={store} />
            ).exists()
        ).toBe(true);
    });

    it("should show initial state value", () => {
        const initialState = {
            user: {
                hasErrored: false,
                isLoading: false,
                currentUser: null
            }
        };
        expect(mapStateToProps(initialState)).toEqual({
            hasErrored: false,
            isLoading: false,
            user: null
        });
    });

    it("should give action functions instanse", () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onUserSave();
        expect(dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    });
});

