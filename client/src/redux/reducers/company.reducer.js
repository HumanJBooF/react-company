import types from '../actions/types';

const initialState = {
    companies: [],
    error: {}
}

const companyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOAD_COMPANIES:
            return {
                ...state,
                companies: payload
            }
        case types.LOAD_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}

export default companyReducer;