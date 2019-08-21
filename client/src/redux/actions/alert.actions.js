import uuid from 'uuid';
import types from './types';

const setAlert = (msg, type, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: types.SET_ALERT,
        payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: types.REMOVE_ALERT, payload: id }), timeout);
}

export {
    setAlert
}