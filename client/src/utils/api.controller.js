import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const apiController = {
    register: newUser => axios.post('/api/users/register', newUser, config),
    loadUser: () => axios.get('/api/auth', config),
    loginUser: user => axios.post('/api/auth/login', user, config),
    getCompanyData: () => axios.get('/api/company', config),
    getOneCompany: name => axios.get(`/api/company/${name}`, config),
    editCompanyData: data => axios.post('/api/company/edit', data, config),
    setToken: token =>
        token
            ? axios.defaults.headers.common['x-auth-token'] = token
            : delete axios.defaults.headers.common['x-auth-token']
}

export default apiController;