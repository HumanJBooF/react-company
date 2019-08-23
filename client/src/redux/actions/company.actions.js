import types from './types';
import API from '../../utils/api.controller';

const loadAllCompanies = () => async dispatch => {
    try {
        const res = await API.getCompanyData();
        dispatch({ type: types.LOAD_COMPANIES, payload: res.data });
    } catch (err) {
        dispatch({ type: types.LOAD_ERROR, payload: { status: err.response.status ? err.response.status : 'Server Error' } });
    }
}

const loadOneCompany = name => async dispatch => {
    try {
        const res = await API.getOneCompany(name);
        dispatch({ type: types.GET_COMPANY, payload: res.data });
    } catch (err) {
        dispatch({ type: types.LOAD_ERROR, payload: { status: err.response.status } });
    }
}

const leaveCompany = history => async dispatch => {
    dispatch({ type: types.LEAVE_COMPANY });
    history.push('/registry');
}

const isEditingClick = () => async dispatch => {
    dispatch({ type: types.EDITING })
}

const editCompany = data => async dispatch => {
    try {
        await API.editCompanyData(data);
        dispatch({ type: types.EDIT_COMPANY });
    } catch (err) {
        dispatch({ type: types.LOAD_ERROR, payload: { status: err.response.status } });
    }
}

export {
    loadAllCompanies,
    loadOneCompany,
    leaveCompany,
    editCompany,
    isEditingClick
}