
//import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../../constants';
import getJsonResponse from '../../api';

export const getUsers = () => {
    return {
        type: 'GET_USERS'
    }
}

export const getUserById = () => {
    return {
        type: 'GET_USER_ID'
    }
}

export const getUsersSuccess = data => {
    return {
        type: 'GET_USERS_SUCCESS',
        data
    }
}

export const getUsersFailure = () => {
    return {
        type: 'GET_USERS_FAILURE'
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(getUsers());
        getJsonResponse()
            .then(([response, json]) => {
                console.log('aca')
                dispatch(getUsersSuccess(json))
            })
            .catch((err) => {
                console.log('fracaso')
                dispatch(getUsersFailure())
            })
            //.catch((err) => console.log(err))
    }
}

export const fetchUserById = (id) => {
    return (dispatch) => {
        dispatch(getUser(id));
        getJsonResponse()
            .then(([response, json]) => {
                console.log('aca')
                dispatch(getUsersSuccess(json))
            })
            .catch((err) => {
                console.log('fracaso')
                dispatch(getUsersFailure())
            })
    }
}