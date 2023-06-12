import styled from "styled-components";

const FadeBox = styled.div`
  transition: 300ms;
  opacity: 0;
  ${props => props.showContent && 'opacity: 1;'}
`

export default FadeBox;