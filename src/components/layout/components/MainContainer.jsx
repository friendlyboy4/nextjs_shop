import styled from "styled-components";

const MainContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 480px) {
    padding: 0 1rem; 
  };
`


export default function MainContainer({ children, closeNavMenu, showContent }) {
  return (
    <MainContainerStyled
      onClick={closeNavMenu}
      showContent={showContent}
    >{children}</MainContainerStyled>
  )
}