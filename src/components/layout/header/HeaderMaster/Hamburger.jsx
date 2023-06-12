import styled from 'styled-components';

const HamburgerContainer = styled.div`
  display: none;
  cursor: pointer;
  z-index: 3;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Bar = styled.span`
  display: block;
  width: 2.4rem;
  height: 0.3rem;
  margin: 0.5rem auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: ${props => props.theme.fonts.fontColor};
`
const Bar1 = styled(Bar)`
  &.active {
    transform: translateY(8px) rotate(45deg);
  }
`
const Bar2 = styled(Bar)`
  &.active {
    opacity: 0;
  }
`
const Bar3 = styled(Bar)`
  &.active {
    transform: translateY(-8px) rotate(-45deg);
  }
`

export default function Hamburger({ navbarChange, navbarIsOpen }) {
  return (
    <HamburgerContainer
      onClick={navbarChange}
      onKeyDown={navbarChange}
      role="button"
      tabIndex="0"
    >
      <Bar1 className={`${navbarIsOpen ? "active" : ""}`}/>
      <Bar2 className={`${navbarIsOpen ? "active" : ""}`} />
      <Bar3 className={`${navbarIsOpen ? "active" : ""}`}/>
    </HamburgerContainer>
  )
}