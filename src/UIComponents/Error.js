import styled from 'styled-components';
import { ERROR, ERROR_BACKGROUND } from './colors';

export default styled.div`
  color: ${ERROR};
  background-color: ${ERROR_BACKGROUND};
  border: 1px solid ${ERROR};
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
`;
