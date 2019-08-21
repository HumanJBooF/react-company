import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import alertReducer from './alert.reducer';
import companyReducer from './company.reducer';

export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    company: companyReducer
});