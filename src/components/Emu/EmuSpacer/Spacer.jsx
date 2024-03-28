import styled from "styled-components";

const SpacerStyled = styled.div`
  width: 50%;
  border-bottom: 1px solid #00000044;
  margin: 10rem auto;
  @media (max-width: 768px) {
    margin: 6rem auto;
  }
`;

export default function Spacer() {
  return <SpacerStyled />;
}
