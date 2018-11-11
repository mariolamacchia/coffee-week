import styled from 'styled-components';

export default styled.img.attrs({
  src: '/coffee.svg',
})`
  height: ${props => props.size};
  margin: 0 20px;
`;
