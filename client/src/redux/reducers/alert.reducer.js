import types from '../actions/types';

const initialState = [];

const alertReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.SET_ALERT:
            return [...state, payload];
        case types.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}

export default alertReducer;
