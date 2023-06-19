import { useState, useEffect } from 'react';

import styled from "styled-components";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import HeaderLogo from "./HeaderLogo";
import { Hamburger, GhostBurger } from './Hamburger';


const HeaderContainer = styled.header`
  font-family: ${props => props.theme.fonts.fontFamily};
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 0;
  background-color: ${props => props.theme.colors.headerBGColor};
  backdrop-filter: ${props => props.theme.colors.headerBlur};
  -webkit-backdrop-filter: ${props => props.theme.colors.headerBlur};
  filter: drop-shadow(2px 2px 5px #00000012);
  width: 100%;
  font-size: 1rem;
  transition: transform 0.3s ease;
  ${props => !props.visible && 
    'transform: translateY(-9.5rem);'
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`
const HeaderInnerContainer = styled.div`
  max-width: ${props => props.theme.layout.contentWidth};
  display: flex;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1260px) {
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 1.6rem 0;
  }
`

const HeaderContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  z-index: 9999;
  @media (max-width: 768px) {
    background-color: ${props => props.theme.colors.headerBGColor};
    position: fixed;
    padding-left: 1rem;
    top: 6.8rem;
    width: 30rem;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid #ffffff;
    transform: translateX(-110%);
    -webkit-transform: translateX(-110%);
    transition: transform .3s ease, opacity .3s ease;
    opacity: 0;
    &.active {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    width: 52%;
  }
`

export default function Header({ navbarChange, navbarIsOpen, navbarClose }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setShow(true);
      } else {
        setShow(false)
      }
      setLastScrollY(window.scrollY)
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <HeaderContainer visible={show}>
      <HeaderInnerContainer>

        <Hamburger 
          navbarChange={navbarChange}
          navbarIsOpen={navbarIsOpen}
        />

        <HeaderLogo />
        <HeaderContentContainer
          className={`${navbarIsOpen ? "active" : ""}`}
        >
          <NavLeft 
            navbarClose={navbarClose}
          />
          <NavRight 
            navbarClose={navbarClose}
          />
        </HeaderContentContainer>

        <GhostBurger />

      </HeaderInnerContainer>
    </HeaderContainer>
  )
}