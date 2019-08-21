import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const apiController = {
    register: newUser => axios.post('/api/users/register', newUser, config),
    loadUser: () => axios.get('/api/auth'),
    loginUser: user => axios.post('/api/auth/login', user, config),
    setToken: token =>
        token
            ? axios.defaults.headers.common['x-auth-token'] = token
            : delete axios.defaults.headers.common['x-auth-token']
}

export default apiController;