import { USER_HAS_ERRORED, USER_IS_LOADING, FETCH_DATA_SUCCESS } from '../constants';

export default function user(state = {
    hasErrored: false,
    isLoading: false,
    currentUser: null
}, action) {
    switch (action.type) {
        case USER_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored,
            };
        case USER_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                currentUser: action.currentUser,
            };
        default:
            return state;
    }
}
