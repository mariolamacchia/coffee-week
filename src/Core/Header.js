import React from 'react';
import styled from 'styled-components';
import Menu from '../UIComponents/Menu';
import H1 from '../UIComponents/Typography/H1';

const Logo = styled.img`
  height: 50px;
  margin-right: 20px;
`;

export default function Header() {
  return (
    <Menu alignItems="center" justifyContent="center">
      <Logo src="/coffee.svg" />
      <H1>Coffee Week</H1>
    </Menu>
  );
}
