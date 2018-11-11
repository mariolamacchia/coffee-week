import styled from 'styled-components';
import { MOBILE_MAX } from './breakpoints';

export default styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media screen and (max-width: ${MOBILE_MAX}) {
    grid-template-columns: 1fr;
  }
`;
