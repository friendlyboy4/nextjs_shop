import styled from "styled-components";

const PriceContainer = styled.div`
  width: fit-content;
  align-self: center;
  margin: 0 2rem 0 0;
  @media (max-width: 768px) {
    margin: 0 1rem 0 0;
  }
`;

const PriceText = styled.span`
  font-size: 2rem;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
  /* font-family: "Gasoek One", sans-serif; */
`;

export default function EmuPrice() {
  return (
    <PriceContainer>
      <PriceText>
        RRP <br />
        $2500
      </PriceText>
    </PriceContainer>
  );
}
