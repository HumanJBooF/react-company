import React from 'react';
import { Link } from 'react-router-dom';

const RegistryCard = ({ name, revenue, employee_count }) => {
    return (
        <div className='card p-1 m-1'>
            <div className='card-header'>
                <div className='card-title'>{name}</div>
            </div>
            <div className='card-section'>
                <div className='sub-title'>Revenue: ${revenue}</div>
                <div className='sub-title'># of employees: {employee_count}</div>
            </div>
            <div className='card-footer'>
                <Link to={`/registry/${name.split(' ').join('-')}`}>Impersonate</Link>
            </div>
        </div>
    )
}

export default RegistryCard;
