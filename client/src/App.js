import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// @components
import Navbar from './components/Navbar/Navbar.component';
import Landing from './components/Landing/Landing.component';
import Login from './components/auth/Login.component';
import Register from './components/auth/Register.component';
import Alert from './components/Alert/Alert.component';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.component';
import RegistryList from './components/RegistryList/RegistryList.component';
import CompanyInfo from './components/CompanyInfo/CompanyInfo.component';
// @redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth.actions';
// @utils
import API from './utils/api.controller';
// @styles
import './App.css';

if (localStorage.token) {
  API.setToken(localStorage.token)
}

const App = () => {
  useEffect(() => { store.dispatch(loadUser()) }, []);
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/registry' component={RegistryList} />
              <PrivateRoute exact path='/registry/:name' component={CompanyInfo} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  )
}



export default App;
