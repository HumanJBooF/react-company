import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// @redux
import { connect } from 'react-redux';
import { loadOneCompany, leaveCompany } from '../../redux/actions/company.actions';
// @components
import EditForm from '../EditForm/EditForm.component';

const CompanyInfo = ({ match, history, company, loadOneCompany, leaveCompany }) => {
    useEffect(() => {
        loadOneCompany(match.params.name)
    }, []);

    return (
        <div className='company-info'>
            <EditForm
                name={company.name}
                revenue={company.revenue}
                phone={company.phone}
                address={company.address}
                employee_count={company.employee_count}
            />
            <button onClick={() => leaveCompany(history)}>Leave Company</button>
        </div>
    )
};

CompanyInfo.propTypes = {
    loadOneCompany: PropTypes.func.isRequired,
    leaveCompany: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
}

const mapStateToProps = ({ company: { company } }) => ({ company });

export default connect(mapStateToProps, { loadOneCompany, leaveCompany })(CompanyInfo);