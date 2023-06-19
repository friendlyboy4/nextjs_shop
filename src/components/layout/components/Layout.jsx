import Header from "@/components/layout/header/Header";
import HeaderPane from "../header/HeaderPane";
import ContentContainer from "@/components/layout/components/ContentContainer";
import MainContainer from "@/components/layout/components/MainContainer";
import Footer from "@/components/layout/footer/Footer";

import { useState } from "react";

export default function Layout({ children }) {

  const [navbarIsOpen, setNavbarIsOpen] = useState(false)
  const navbarHandler = () => {
    setNavbarIsOpen((prevState) => !prevState)
    if (!navbarIsOpen) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "visible"
    }
  }

  const closeNavMenu = () => {
    if (navbarIsOpen) {
      setNavbarIsOpen(false)
      document.body.style.overflowY = "visible"
    }
  }
  return (
    <>
    <Header 
      navbarChange={navbarHandler}
      navbarIsOpen={navbarIsOpen}
      navbarClose={closeNavMenu}
    />
    <HeaderPane 
      active={navbarIsOpen} 
    />
    <MainContainer
      closeNavMenu={closeNavMenu}
    >
      <ContentContainer
        fade={navbarIsOpen}
      >
        { children }
      </ContentContainer>
    </MainContainer>
    <Footer fade={navbarIsOpen} />
    </>
  )
}