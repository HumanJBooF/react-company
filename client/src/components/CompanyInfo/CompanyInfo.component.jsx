import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
import { loadOneCompany, leaveCompany, isEditingClick } from '../../redux/actions/company.actions';
// @components
import EditForm from '../EditForm/EditForm.component';
import RegistryCard from '../RegistryCard/RegistryCard.component';

const CompanyInfo = ({
    match,
    history,
    company,
    isEditing,
    isImpersonating,
    loadOneCompany,
    leaveCompany,
    isEditingClick
}) => {

    useEffect(() => {
        loadOneCompany(match.params.name);
    }, [loadOneCompany, match.params.name]);

    const { revenue, phone, address, employee_count } = company;

    const handleClick = event => {
        event.preventDefault();
        isEditingClick();
    }

    if (!isImpersonating && !isEditing) {
        return <Redirect to='/registry' />
    }

    return (
        <div className='company-info'>
            {!isEditing && isImpersonating
                ? <RegistryCard
                    // some reason using name from the company object was causing an undefined error
                    name={match.params.name.split('-').join(' ')}
                    revenue={revenue}
                    phone={phone}
                    address={address}
                    employee_count={employee_count}
                    handleClick={handleClick}
                />
                : <EditForm
                    _id={company._id}
                    name={company.name}
                    revenue={company.revenue}
                    phone={company.phone}
                    address={company.address}
                    employee_count={company.employee_count}
                />
            }
            <div className='btn btn-dark leave' onClick={() => leaveCompany(history)}>Leave Company</div>
        </div>
    )
};

CompanyInfo.propTypes = {
    loadOneCompany: PropTypes.func.isRequired,
    leaveCompany: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    isEditingClick: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
}

const mapStateToProps = ({ company: { company, isEditing, isImpersonating } }) => ({
    company,
    isEditing,
    isImpersonating
});

export default connect(mapStateToProps, { loadOneCompany, leaveCompany, isEditingClick })(CompanyInfo);