import types from './types';
import API from '../../utils/api.controller';
import { setAlert } from './alert.actions';

const loadUser = () => async dispatch => {
    if (localStorage.token) {
        API.setToken(localStorage.token)
    }

    try {
        const res = await API.loadUser();

        dispatch({ type: types.USER_LOADED, payload: res.data });
    } catch (err) {
        dispatch({ type: types.AUTH_ERROR });
    }
}

const register = ({ name, email, password }) => async dispatch => {
    try {
        const res = await API.register({ name, email, password });

        dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({ type: types.REGISTER_FAIL });
    }
}

const login = user => async dispatch => {
    try {
        const res = await API.loginUser(user);

        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({ type: types.LOGIN_FAIL })
    }
}

const logout = () => dispatch => {
    dispatch({ type: types.LOGOUT });
}

export {
    register,
    loadUser,
    login,
    logout
}