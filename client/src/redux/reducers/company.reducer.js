import types from '../actions/types';

const initialState = {
    companies: [],
    company: {},
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
                companies: [],
                error: payload
            }
        case types.GET_COMPANY:
            return {
                ...state,
                companies: [],
                company: payload
            }
        default:
            return state;
    }
}

export default companyReducer;