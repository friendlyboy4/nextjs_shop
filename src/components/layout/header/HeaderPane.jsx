import styled from "styled-components";

const HeaderPaneStyled = styled.div`
  z-index: 98;
  position: fixed;
  top: 6.8rem;
  width: 30rem;
  height: 100vh;
  transform: translateX(-110%);
  -webkit-transform: translateX(-110%);
  transition: transform .3s ease, opacity .3s ease;
  opacity: 0;
  backdrop-filter: ${props => props.theme.colors.headerBlur};
  -webkit-backdrop-filter: ${props => props.theme.colors.headerBlur};
  &.active {
    opacity: 1;
    transform: translateX(0);
  }
  @media (max-width: 480px) {
    width: 52%;
  }
`


export default function HeaderPane({ active }) {
  return (
    <HeaderPaneStyled 
      className={`${active ? "active" : ""}`}
    />
  )
}