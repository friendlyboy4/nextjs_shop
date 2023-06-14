import styled from "styled-components";

const CopyBox = styled.div`
  margin: 2rem 0;
  width: 100%;
  font-size: 2rem;
  line-height: 1.8;
  font-family: ${props => props.theme.fonts.fontFamily};
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`

export default CopyBox;

  
