import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegistryCard = ({ name, revenue, employee_count, address, phone, handleClick }) => {
    return (
        <div className='card p-1 m-1 bg-light'>
            <div className='card-header m-1 lead text-dark'>
                <div className='card-title'>{name}</div>
            </div>
            <div className='card-section text-dark'>
                <div className='sub-title'>Revenue: ${revenue}</div>
                <div className='sub-title'># of employees: {employee_count}</div>
                {
                    (phone && address)
                        ?
                        <>
                            <div className='sub-title'>Phone Number: {phone} </div>
                            <div className='sub-title'>Address: {address}</div>
                        </>
                        : null
                }
            </div>
            <div className='card-footer p bg-dark btn-dark'>
                {
                    (!phone && !address)
                        ? <Link to={`/registry/${name.split(' ').join('-')}`}>Impersonate</Link>
                        : <div className='text-primary' onClick={handleClick}>Edit</div>
                }
            </div>
        </div>
    )
}

RegistryCard.propTypes = {
    name: PropTypes.string,
    revenue: PropTypes.string,
    employee_count: PropTypes.number,
    address: PropTypes.string,
    phone: PropTypes.string,
    handleClick: PropTypes.func,
}

export default RegistryCard;
