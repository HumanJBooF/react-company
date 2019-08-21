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
    editCompanyDate: (name, edits) => axios.post(`/api/company/${name}/edit`, edits, config),
    setToken: token =>
        token
            ? axios.defaults.headers.common['x-auth-token'] = token
            : delete axios.defaults.headers.common['x-auth-token']
}

export default apiController;