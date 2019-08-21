import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='x-large'>Company Registry</h1>
                    <p className='lead'>
                        Sign up/in to view all companies statistics in registry
                    </p>
                    <div className='buttons'>
                        <Link to='register' className='btn btn-primary'>Sign Up</Link>
                        <Link to='login' className='btn btn-light'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
