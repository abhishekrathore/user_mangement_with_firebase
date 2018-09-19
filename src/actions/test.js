
import { USER_HAS_ERRORED, USER_IS_LOADING, FETCH_DATA_SUCCESS } from '../constants';
import { hasErrored, isLoading, fetchDataSuccess, onUserSave } from "./user";
describe('actions', () => {
    it('should set user error flag in store', () => {
        const setError = true;
        const expectedAction = {
            type: USER_HAS_ERRORED,
            hasErrored: setError
        }
        expect(hasErrored(setError)).toEqual(expectedAction)
    })

    it('should re-set user error flag in store', () => {
        const setError = false;
        const expectedAction = {
            type: USER_HAS_ERRORED,
            hasErrored: setError
        }
        expect(hasErrored(setError)).toEqual(expectedAction)
    })

    it('should re-set user data saving loading falg in store', () => {
        const setLoading = true;
        const expectedAction = {
            type: USER_IS_LOADING,
            isLoading: setLoading
        }
        expect(isLoading(setLoading)).toEqual(expectedAction)
    })

    it('should re-set  user data saving loading falg in store', () => {
        const setLoading = false;
        const expectedAction = {
            type: USER_IS_LOADING,
            isLoading: setLoading
        }
        expect(isLoading(setLoading)).toEqual(expectedAction)
    })

    it('should set user data in store', () => {
        const setUser = {
            id: '',
            firstName: 'Jhon',
            lastName: 'Watson',
            company: 'Yahoo',
            position: 'CEO',
            department: 'administration',
            email: 'admin@yahoo.com'
        };
        const expectedAction = {
            type: FETCH_DATA_SUCCESS,
            currentUser: setUser
        }
        expect(fetchDataSuccess(setUser)).toEqual(expectedAction)
    });
})