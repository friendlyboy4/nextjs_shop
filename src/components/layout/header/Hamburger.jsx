import styled from "styled-components";

const HamburgerWrapper = styled.div`
  display: none;
  @media(max-width: 768px) {
    display: flex;
    flex: 1 1 0px;
    justify-content: flex-start;
  }
`
const HamburgerContainer = styled.div`
  display: none;
  cursor: pointer;
  z-index: 3;
  @media (max-width: 768px) {
    display: block;
    margin-left: 1rem;
  }
`;

const Bar = styled.span`
  display: block;
  width: 2.4rem;
  height: 0.3rem;
  margin: 0.5rem auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.theme.fonts.fontColor};
`;
const Bar1 = styled(Bar)`
  &.active {
    transform: translateY(8px) rotate(45deg);
  }
`;
const Bar2 = styled(Bar)`
  &.active {
    opacity: 0;
  }
`;
const Bar3 = styled(Bar)`
  &.active {
    transform: translateY(-8px) rotate(-45deg);
  }
`;

export function Hamburger({ navbarChange, navbarIsOpen }) {
  return (
    <HamburgerWrapper>
      <HamburgerContainer
        onClick={navbarChange}
        onKeyDown={navbarChange}
        role="button"
        aria-label="button to show navbar"
        tabIndex="0"
      >
        <Bar1 className={`${navbarIsOpen ? "active" : ""}`} />
        <Bar2 className={`${navbarIsOpen ? "active" : ""}`} />
        <Bar3 className={`${navbarIsOpen ? "active" : ""}`} />
      </HamburgerContainer>
    </HamburgerWrapper>
  );
}

const GhostBurgerBox = styled.div`
  display: none;
  width: 2.4rem;
  height: 2.4rem;
  @media (max-width: 768px) {
    display: block;
    margin-right: 1rem;
  }
`;

export function GhostBurger() {
  return <GhostBurgerBox />;
}
