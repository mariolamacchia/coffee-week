import styled from 'styled-components';
import { MOBILE_MAX } from './breakpoints';

export default styled.div`
  @media screen and (max-width: ${MOBILE_MAX}) {
    padding-bottom: 40px;
  }
`;
