import React from "react";

import Header from "@/components/layout/header/Header";
import HeaderPane from "../header/HeaderPane";
import ContentContainer from "@/components/layout/components/ContentContainer";
import MainContainer from "@/components/layout/components/MainContainer";
import Footer from "@/components/layout/footer/Footer";

import { GoogleTagManager } from "@next/third-parties/google";

import { useState, useEffect } from "react";

export default function Layout({ children, emu }) {
  ////////// HEADER CONTROL ///////////
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < lastScrollY || window.scrollY < 50) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  /////////////////////

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const navbarHandler = () => {
    setNavbarIsOpen((prevState) => !prevState);
    if (!navbarIsOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };

  const closeNavMenu = () => {
    if (navbarIsOpen) {
      setNavbarIsOpen(false);
      document.body.style.overflowY = "visible";
    }
  };

  return (
    <>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Header
        navbarChange={navbarHandler}
        navbarIsOpen={navbarIsOpen}
        navbarClose={closeNavMenu}
        show={show}
        yPos={lastScrollY}
        emu={emu}
      />
      <HeaderPane active={navbarIsOpen} />

      {emu ? (
        <>
          <MainContainer
            closeNavMenu={closeNavMenu}
            emu
          >
            {children}
          </MainContainer>
        </>
      ) : (
        <>
          <MainContainer closeNavMenu={closeNavMenu}>
            <ContentContainer fade={navbarIsOpen}>{children}</ContentContainer>
          </MainContainer>
        </>
      )}

      <Footer fade={navbarIsOpen} />
    </>
  );
}
