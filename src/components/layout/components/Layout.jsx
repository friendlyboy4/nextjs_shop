import Header from "@/components/layout/header/HeaderMaster/Header";
import ContentContainer from "@/components/layout/components/ContentContainer";
import MainContainer from "@/components/layout/components/MainContainer";
import FooterNew from "@/components/layout/footer/FooterNew";

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
    <MainContainer
      closeNavMenu={closeNavMenu}
    >
      <ContentContainer
        fade={navbarIsOpen}
      >
        { children }
      </ContentContainer>
      <FooterNew fade={navbarIsOpen} />
    </MainContainer>
    </>
  )
}