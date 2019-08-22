import types from '../actions/types';

const initialState = {
    companies: [],
    company: {},
    isImpersonating: false,
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
                company: payload,
                isImpersonating: true
            }
        case types.LEAVE_COMPANY:
            return {
                ...state,
                company: {},
                isImpersonating: false
            }
        default:
            return state;
    }
}

export default companyReducer;