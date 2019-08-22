import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { loadAllCompanies } from '../../redux/actions/company.actions';
// @components
import RegistryCard from '../RegistryCard/RegistryCard.component';

const RegistryList = ({ loadAllCompanies, company }) => {
    useEffect(() => {
        loadAllCompanies();
    }, [loadAllCompanies]);

    if (company.isImpersonating) {
        return <Redirect to={`/registry/${company.company.name.split(' ').join('-')}`} />
    }

    return (
        <div className='registry-background'>
            <div className='title'>Companies</div>
            <div className='card-registry my-3'>
                {company.companies.map((obj, i) =>
                    <RegistryCard
                        name={obj.name}
                        revenue={obj.revenue}
                        employee_count={obj.employee_count}
                        key={i}
                    />
                )}
            </div>
        </div>
    )
};

RegistryList.propTypes = {
    companies: PropTypes.array,
    loadAllCompanies: PropTypes.func.isRequired
};

const mapStateToProps = ({ company }) => ({ company });

export default connect(mapStateToProps, { loadAllCompanies })(RegistryList);