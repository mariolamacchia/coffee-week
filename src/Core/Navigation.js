import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareAlt, faRandom } from '@fortawesome/free-solid-svg-icons';
import Toolbar from '../UIComponents/Toolbar';

export default function Navigation() {
  return (
    <Toolbar>
      <Toolbar.Button>
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
