import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// @redux
import { connect } from 'react-redux';
import { loadAllCompanies } from '../../redux/actions/company.actions';
// @components
import RegistryCard from '../RegistryCard/RegistryCard.component';

const RegistryList = ({ loadAllCompanies, companies }) => {
    useEffect(() => {
        loadAllCompanies();
    }, [loadAllCompanies]);
    return (
        <>
            <div className='title'>Companies</div>
            <div className='card-registry my-3'>
                {companies.map((obj, i) =>
                    <RegistryCard
                        name={obj.name}
                        revenue={obj.revenue}
                        employee_count={obj.employee_count}
                        key={i}
                    />
                )}
            </div>
        </>
    )
};

RegistryList.propTypes = {
    companies: PropTypes.array,
    loadAllCompanies: PropTypes.func.isRequired
};

const mapStateToProps = ({ company: { companies } }) => ({ companies });

export default connect(mapStateToProps, { loadAllCompanies })(RegistryList);