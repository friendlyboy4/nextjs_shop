import styled from "styled-components";
import Link from "next/link";

import IconContainer from "./IconContainer";

const HeaderRightContainer = styled.div`
  // display: flex;
  flex: 2;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  display: none;
  @media (max-width: 768px) {
  display: flex;
    flex-direction: column;
    margin-top: 1rem;
    justify-content: flex-start;
  }
`;



const TextContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }
`;

const TextItem = styled.div`
  padding: 0 2em 0 0;
  font-size: 2.2em;
  color: ${(props) => props.theme.colors.headerFontColor};
  transition: color 0.3s ease;
  @media (max-width: 1000px) and (min-width: 768px) {
    font-size: 2em;
  }
  @media (max-width: 768px) {
    padding: 1rem 4rem 1rem 0;
  }
  :hover {
    color: goldenrod;
  }
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.headerFontColor};
  text-decoration: none;
`;


export default function NavRight({ navbarClose }) {
  return (
    <HeaderRightContainer>
      <TextContainer>
        <LinkStyled
          href="/about"
          onClick={navbarClose}
        >
          <TextItem>About</TextItem>
        </LinkStyled>
        <LinkStyled
          href="#contact"
          onClick={navbarClose}
        >
          <TextItem>Contact</TextItem>
        </LinkStyled>
      </TextContainer>
      <IconContainer />

    </HeaderRightContainer>
  );
}
