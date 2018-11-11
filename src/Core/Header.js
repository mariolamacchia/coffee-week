import React from 'react';
import Menu from '../UIComponents/Menu';
import H1 from '../UIComponents/Typography/H1';
import Logo from './Logo';

export default function Header() {
  return (
    <Menu alignItems="center" justifyContent="center">
      <Logo size="50px" />
      <H1>Coffee Week</H1>
    </Menu>
  );
}
