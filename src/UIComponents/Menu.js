import styled from 'styled-components';
import {
  SECONDARY, PRIMARY, TEXT, TEXT_INVERTED,
} from './colors';
import FlexBox from './FlexBox';

export default styled(FlexBox)`
  background: ${props => (props.secondary ? SECONDARY : PRIMARY)};
  color: ${props => (props.secondary ? TEXT : TEXT_INVERTED)};
  padding: 10px;
  flex-direction: row;
`;
