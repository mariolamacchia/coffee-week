import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '../UIComponents/Grid';
import {
  getError, isLoading, getRandomEmployeesPairs, fetchEmployees,
} from './CoffeeWeekRedux';
import Spinner from '../UIComponents/Spinner';
import Error from '../UIComponents/Error';
import PairCard from './PairCard';

class Employees extends PureComponent {
  componentDidMount() {
    const { fetchEmployees } = this.props;
    fetchEmployees();
  }

  render() {
    const { loading, pairs, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Error>{error}</Error>;
    }

    return (
      <Grid>
        {pairs.map(([employeeFrom, employeeTo]) => (
          <PairCard from={employeeFrom} to={employeeTo} key={employeeTo.guid} />
        ))}
      </Grid>
    );
  }
}

Employees.propTypes = {
  fetchEmployees: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.shape({ message: PropTypes.string.isRequired }),
  pairs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Employees.defaultProps = {
  error: null,
};

export default connect(state => ({
  loading: isLoading(state),
  error: getError(state),
  pairs: getRandomEmployeesPairs(state),
}), { fetchEmployees })(Employees);
