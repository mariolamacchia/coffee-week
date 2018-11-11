import styled from 'styled-components';
import Menu from './Menu';

const Toolbar = styled(Menu).attrs({
  justifyContent: 'space-evenly',
  secondary: true,
})`
  @media screen and (max-width: 767px) {
    bottom: 0;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
  }
`;

Toolbar.Button = styled.button`
  background: transparent;
  border: 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: -10px;
  margin-bottom: -10px;
`;

export default Toolbar;
