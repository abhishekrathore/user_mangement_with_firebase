import { toast } from 'react-toastify';
import { USER_HAS_ERRORED, USER_IS_LOADING, FETCH_DATA_SUCCESS } from '../constants';
import firebase from 'firebase';

export function hasErrored(bool) {
    if (bool) {
        toast.error("Error whiile calling web service", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000
        });
    }
    return {
        type: USER_HAS_ERRORED,
        hasErrored: bool
    };
}

export function isLoading(bool) {
    return {
        type: USER_IS_LOADING,
        isLoading: bool
    };
}

export function fetchDataSuccess(currentUser) {
    return {
        type: FETCH_DATA_SUCCESS,
        currentUser
    };
}


export function onUserSave(userInfo) {
    return (dispatch) => {
        dispatch(isLoading(true));
        if (!userInfo.id) {
            firebase.database().ref('users/').push(userInfo).once('value').then((user) => {
                if (user.val()) {
                    dispatch(fetchDataSuccess(Object.assign(user.val(), { id: user.key })))
                } else {
                    dispatch(hasErrored(true))
                }
                dispatch(isLoading(false));
            });
        } else {
            firebase.database().ref(`users/${userInfo.id}`).set(userInfo).then((error) => {
                if (!error) {
                    dispatch(fetchDataSuccess(Object.assign(userInfo, { id: userInfo.id })))
                } else {
                    dispatch(hasErrored(true))
                }
                dispatch(isLoading(false));
            });
        }


    };
}