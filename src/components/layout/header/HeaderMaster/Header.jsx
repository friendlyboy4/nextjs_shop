import { useState, useEffect } from 'react';

import styled from "styled-components";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Hamburger from "./Hamburger";
import GhostBurger from "./GhostBurger";
import HeaderLogo from "./HeaderLogo";


const HeaderContainer = styled.header`
  font-family: 'League Spartan', sans-serif;
  position: sticky;
  top: 0;
  z-index: 99;
  padding: 0 1rem;
  background-color: ${props => props.theme.colors.headerBGColor};
  backdrop-filter: ${props => props.theme.colors.headerBlur};
  filter: drop-shadow(2px 2px 5px #00000011);
  width: 100%;
  font-size: 1rem;
  transition: transform 0.3s ease;
  ${props => !props.visible && 
    'transform: translateY(-8.5rem);'
  }
  @media (min-width: 768px) and (max-width: 1000px) {
    font-size: 0.8rem;
  }
`
const HeaderInnerContainer = styled.div`
  max-width: ${props => props.theme.layout.contentWidth};
  padding: 1.6rem 0;
  display: flex;
  margin: 0 auto;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

const HeaderContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  @media (max-width: 768px) {
    background-color: ${props => props.theme.colors.headerBGColor};
    backdrop-filter: ${props => props.theme.colors.headerBlur};
    position: fixed;
    top: 6.8rem;
    width: 30rem;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid #eeeeee;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transition: transform .3s ease, opacity .2s ease;
    opacity: 0;
    &.active {
      opacity: 1;
      transform: translateX(0%);
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
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false);
      } else {
        setShow(true)
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
    // <HeaderContainer className={`active ${show && 'hidden'}`}>
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