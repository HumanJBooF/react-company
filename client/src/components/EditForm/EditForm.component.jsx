import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { editCompany } from '../../redux/actions/company.actions';

const EditForm = props => {
    const [formData, setFormData] = useState({
        name: '',
        revenue: '',
        phone: '',
        address: '',
        employee_count: ''
    });

    useEffect(() => {
        setFormData({
            name: props.name,
            revenue: props.revenue,
            phone: props.phone,
            address: props.address,
            employee_count: props.employee_count
        });
    }, [props]);

    const { name, revenue, phone, address, employee_count } = formData;

    const handleChange = event => {
        const { value, name } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.editCompany(formData);
    }

    return (
        <form className='form p bg-light edit-form' onSubmit={handleSubmit}>
            <label>Company Name</label>
            <input
                type='text'
                value={name}
                name='name'
                onChange={handleChange}
            />
            <label>Revenue</label>
            <input
                type='number'
                value={revenue}
                name='revenue'
                pattern="^\d*(\.\d{0,2})?$"
                step='0.01'
                onChange={handleChange}
            />
            <label>Phone Number eg: 777-777-7777</label>
            <input
                type='text'
                value={phone}
                name='phone'
                pattern='^[2-9]\d{2}-\d{3}-\d{4}$'
                onChange={handleChange}
            />
            <label>Address</label>
            <input
                type='text'
                value={address}
                name='address'
                onChange={handleChange}
            />
            <label>Employee Count</label>
            <input
                type='number'
                value={employee_count}
                name='employee_count'
                onChange={handleChange}
                step='5'
            />
            <button className='btn btn-dark m'>Submit</button>
        </form>
    )
}

EditForm.propTypes = {
    name: PropTypes.string,
    revenue: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    employee_count: PropTypes.number,
    editCompany: PropTypes.func.isRequired
}

export default connect(null, { editCompany })(EditForm)
