import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth.actions';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

    const noUserLinks = (
        <ul>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );

    const authUserLinks = (
        <ul>
            <li>
                <div onClick={logout} className='logout'>
                    <i className="fas fa-sign-out-alt mr" />{' '}
                    <div className='hide-sm'>Logout</div>
                </div>
            </li>
        </ul>
    )

    return (
        <nav className='navbar bg-dark'>
            <h1>
                {!loading && isAuthenticated
                    ? <Link to='/registry'>Company</Link>
                    : <Link to='/'>Company</Link>}
            </h1>
            {!loading && isAuthenticated ? authUserLinks : noUserLinks}
        </nav>
    );
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logout })(Navbar);
