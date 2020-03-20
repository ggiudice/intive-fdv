import { GET_USER_ID, GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../../constants';

//import data from '../../../mocks/users.json';
//export default () => data;

const initialState = {
    data: [],
    isFetching: false,
    error: false
}

//TODO decia defaul y puse class
export default UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case GET_USER_ID:
            return {
                ...state,
                data: {},
                isFetching: true
            }
        case GET_USERS_SUCCESS:
            console.log('GET_USERS_SUCCESS', state);
            return {
                ...state,
                data: action.data,
                isFetching: false
            }
        case GET_USERS_FAILURE:
            console.log('GET_USERS_FAILURE');
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}