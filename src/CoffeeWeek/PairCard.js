import React from 'react';
import PropTypes from 'prop-types';
import Card from '../UIComponents/Card';
import FlexBox from '../UIComponents/FlexBox';

export default function PairCard({ from, to }) {
  return (
    <Card>
      <FlexBox justifyContent="space-between" alignItems="center">
        <span>
          Giver:
          {' '}
          <b>
            {from.name.first}
            {' '}
            {from.name.last}
          </b>
        </span>

        <span>
          Receiver:
          {' '}
          <b>
            {to.name.first}
            {' '}
            {to.name.last}
          </b>
        </span>
      </FlexBox>
    </Card>
  );
}

const propType = PropTypes.shape({
  name: PropTypes.object.isRequired,
  guid: PropTypes.string.isRequired,
});

PairCard.propTypes = {
  from: propType.isRequired,
  to: propType.isRequired,
};
