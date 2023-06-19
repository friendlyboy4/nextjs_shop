import styled from "styled-components";
import wallpaper from '../../../assets/util/bike-wallpaper-vector.svg'

const MainContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  background-image: url(${wallpaper.src});
  background-size: 50%;
  background-attachment: fixed;
  @media (max-width: 768px) {
    padding: 0 1rem; 
  };
`


export default function MainContainer({ children, closeNavMenu, showContent }) {
  console.log(wallpaper)
  return (
    <MainContainerStyled
      onClick={closeNavMenu}
      showContent={showContent}
    >{children}</MainContainerStyled>
  )
}