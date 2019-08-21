import React from 'react';

const RegistryCard = ({ name, revenue, employee_count }) => {
    return (
        <div className='card p-1'>
            <div className='card-header'>
                <div className='card-title'>{name}</div>
            </div>
            <div className='card-section'>
                <div className='sub-title'>Revenue: ${revenue}</div>
                <div className='sub-title'># of employees: {employee_count}</div>
            </div>
            <div className='card-footer'>Impersonate</div>
        </div>
    )
}

export default RegistryCard;
