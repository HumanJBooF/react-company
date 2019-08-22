import React from 'react';

const EditForm = ({ name, revenue, phone, address, employee_count }) => {
    return (
        <form className='form'>
            <div className='form-group'>
                <label>Company Name</label>
                <input
                    type="text"
                    value={name}
                    name='name'
                />
            </div>
            <div className='form-group'>
                <label>Revenue</label>
                <input
                    type="text"
                    value={`$${revenue}`}
                    name='revenue'
                />
            </div>
            <div className='form-group'>
                <label>Phone Number</label>
                <input
                    type="text"
                    value={phone}
                    name='phone'
                />
            </div>
            <div className='form-group'>
                <label>Address</label>
                <input
                    type="text"
                    value={address}
                    name='address'
                />
            </div>
            <div className='form-group'>
                <label>Employee Count</label>
                <input
                    type="text"
                    value={employee_count}
                    name='employee_count'
                />
            </div>
        </form>
    )
}

export default EditForm;
