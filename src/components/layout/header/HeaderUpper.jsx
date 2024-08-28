import styled from "styled-components";
import Link from "next/link";
import CallButton from "./CallButton";
import ReviewWidget from "./ReviewWidget";

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.layout.contentWidth};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1260px) {
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1.6rem 0;
    display: none;
  }
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.headerFontColor};
  text-decoration: none;
  margin-left: 2rem;
`;

const HeaderUpperContentBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TextItem = styled.div`
  display: flex;
  padding: 0 2em 0 0;
  font-size: 2.6em;
  color: ${(props) => props.theme.colors.headerFontColor};
  transition: color 0.3s ease;

  @media (max-width: 1000px) and (min-width: 768px) {
    font-size: 2.4em;
  }
  @media (max-width: 768px) {
    padding: 1rem 4rem 1rem 0;
  }
  :hover {
    color: goldenrod;
  }
`;

export default function HeaderUpper() {
  return (
    <Container>
      <ReviewWidget />
      <HeaderUpperContentBox>
        <LinkStyled href="/about">
          <TextItem>About</TextItem>
        </LinkStyled>
        <LinkStyled href="#contact">
          <TextItem>Contact</TextItem>
        </LinkStyled>
        <CallButton />
      </HeaderUpperContentBox>
    </Container>
  );
}
