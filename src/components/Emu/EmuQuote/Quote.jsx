import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 65rem;
  margin: 8rem auto;
  @media (max-width: 768px) {
    padding: 0 2rem;
    margin: ${(props) => (props.last ? "6rem auto 4rem" : "6rem auto")};
    /* margin: 6rem auto; */
  }
`;

const SpecsQuoteContainer = styled(Container)`
  margin: 6rem auto 4rem;
`;

const QuoteCopy = styled.h3`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-weight: 400;
  color: #222222;
  font-size: 1.8em;
  line-height: 1.6;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

export default function Quote({ copy, last }) {
  return (
    <Container last={last}>
      <QuoteCopy>{copy}</QuoteCopy>
    </Container>
  );
}

export function SpecsQuote({ copy }) {
  return (
    <SpecsQuoteContainer>
      <QuoteCopy>{copy}</QuoteCopy>
    </SpecsQuoteContainer>
  );
}
