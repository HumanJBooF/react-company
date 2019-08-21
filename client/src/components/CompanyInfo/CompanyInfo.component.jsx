import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { loadOneCompany } from '../../redux/actions/company.actions';

const CompanyInfo = ({ match, company, loadOneCompany }) => {
    useEffect(() => {
        loadOneCompany(match.params.name)
    }, []);
    return (
        <>
            <div>{company.name}</div>
            <div>{company.address}</div>
            <div>{company.phone}</div>
            <div>${company.revenue}</div>
            <div>{company.employee_count}</div>
        </>
    )
};

CompanyInfo.propTypes = {
    loadOneCompany: PropTypes.func.isRequired,
    company: PropTypes.object.isRequired
}

const mapStateToProps = ({ company: { company } }) => ({ company });

export default connect(mapStateToProps, { loadOneCompany })(CompanyInfo);