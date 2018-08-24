import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
    const res = await axios.get ('http://react-ssr-api.herokuapp.com/users');
    
    // dispatch is for middleware. in this case it's thunk for async axios.
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}