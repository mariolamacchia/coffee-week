import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faRandom } from '@fortawesome/free-solid-svg-icons';
import Toolbar from '../UIComponents/Toolbar';
import { shuffleEmployees } from '../CoffeeWeek/CoffeeWeekRedux';

function Navigation({ shuffleEmployees }) {
  return (
    <Toolbar>
      <Toolbar.Button onClick={shuffleEmployees}>
        <FontAwesomeIcon icon={faRandom} />
        {' '}
        Re-shuffle
      </Toolbar.Button>
      <Toolbar.Button>
        <FontAwesomeIcon icon={faHeart} />
        {' '}
        Like
      </Toolbar.Button>
      <Toolbar.Button>
        <FontAwesomeIcon icon={faShareAlt} />
        {' '}
        Share
      </Toolbar.Button>
    </Toolbar>
  );
}

Navigation.propTypes = {
  shuffleEmployees: PropTypes.func.isRequired,
};

export default connect(null, { shuffleEmployees })(Navigation);
