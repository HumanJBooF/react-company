import React from 'react';
import { Link } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';

const Landing = ({ auth }) => {
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Company Registry</h1>
                    {auth.isAuthenticated && !auth.loading
                        ?
                        <>
                            <p className='lead'>
                                View All Companies
                            </p>
                            <div className='buttons'>
                                <Link to='registry' className='btn btn-primary'>View All</Link>
                            </div>
                        </>
                        : <>
                            <p className='lead'>
                                Sign up/in to view all companies statistics in registry
                            </p>
                            <div className='buttons'>
                                <Link to='register' className='btn btn-primary'>Sign Up</Link>
                                <Link to='login' className='btn btn-light'>Login</Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Landing);
