import styled from "styled-components";

const CopyBox = styled.div`
  position: relative;
  margin: 2rem 0;
  width: 100%;
  font-size: 2rem;
  line-height: 1.8;
  /* font-family: ${(props) => props.theme.fonts.fontFamily}; */
  /* font-family: "outfit"; */
  /* font-family: serif; */
  font-family: "Jost";
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export default CopyBox;
