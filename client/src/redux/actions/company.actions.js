import types from './types';
import API from '../../utils/api.controller';

const loadAllCompanies = () => async dispatch => {
    try {
        const res = await API.getCompanyData();
        dispatch({ type: types.LOAD_COMPANIES, payload: res.data })
    } catch (err) {
        dispatch({ type: types.LOAD_ERROR, payload: { status: err.response.status } })
    }
}

export {
    loadAllCompanies
}