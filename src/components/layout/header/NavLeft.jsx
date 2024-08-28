import Link from "next/link";
import styled from "styled-components";
import IconContainer from "./IconContainer";

const HeaderLeftContainer = styled.div`
  display: flex;
  flex: 3;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex: 0;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1.5em;
  flex: 1 0;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0;
    width: 100%;
    margin: 0;
  }
`;

const NavEl = styled.li`
  list-style-type: none;
  font-size: 2.8em;
  transition: color 0.3s ease;
  @media (max-width: 1000px) {
  }
  @media (min-width: 768px) {
    padding: 0 1.75vw;
  }
  @media (max-width: 768px) {
    font-size: 2.4em;
    border-bottom: 1px solid #00000011;
  }
  @media (max-width: 480px) {
    font-size: 2.6em;
  }
`;

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.headerFontColor};
  display: block;
  padding: 0.4em 0;
  text-decoration: none;
  transition: color 0.3s ease;
  :hover {
    color: goldenrod;
  }
`;

export default function NavLeft({ navbarClose }) {
  return (
    <HeaderLeftContainer>
      <NavContainer>
        <NavList>
          <NavEl>
            <LinkStyled
              href="/bikes"
              onClick={navbarClose}
            >
              Bikes
            </LinkStyled>
          </NavEl>

          <NavEl>
            <LinkStyled
              href="/workshop"
              onClick={navbarClose}
            >
              Workshop
            </LinkStyled>
          </NavEl>

          <NavEl>
            <LinkStyled
              href="/customs"
              onClick={navbarClose}
            >
              Customs
            </LinkStyled>
          </NavEl>

          <NavEl>
            <LinkStyled
              href="/ebikes"
              onClick={navbarClose}
            >
              E&#x2011;Bikes
            </LinkStyled>
          </NavEl>
        </NavList>
      </NavContainer>
    </HeaderLeftContainer>
  );
}
