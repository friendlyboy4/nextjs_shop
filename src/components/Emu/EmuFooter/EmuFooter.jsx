import styled from "styled-components";
import { useEffect, useState } from "react";
import EMU from "./EMU";
import EmuFooterDetail from "./EmuFooterDetail";
import Button from "./Button";
import EmuPrice from "./EmuPrice";

const EmuFooterWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  width: 100%;
  z-index: 999;
  transition: opacity 0.5s ease, transform 0.5s ease;
  font-size: 1rem;
  &.visible {
    opacity: 1;
  }
  &.hidden {
    transform: translate(2px, 2px);
    opacity: 0;
  }
  @media (max-width: 480px) {
    bottom: 0;
  }
`;

const EmuFooterStyled = styled.div`
  position: relative;
  padding: 0.4rem 0.8rem 0.4rem 0.4rem;
  background-color: #ffffffdd;
  border: 1px solid #abd5f887;
  backdrop-filter: blur(5px);
  /* width: 60%; */
  width: fit-content;
  height: 8rem;
  margin: 0 auto;
  transition: 0.5s ease;
  color: #444444;
  &.visible {
    box-shadow: 5px 5px 10px #00000011;
  }
  &.hidden {
    /* box-shadow: none; */
    box-shadow: 1px 1px 1px #00000033;
  }
  @media (max-width: 1000px) {
    /* width: 80%; */
  }
  @media (max-width: 768px) {
    /* width: 90%; */
    height: 6rem;
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    /* width: 100%; */
    font-size: 0.6rem;
    /* padding: 0.5rem; */
    /* height: 16rem; */
  }
`;

const InnerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 480px) {
    /* flex-direction: column; */
  }
`;

const PriceNButtonContainer = styled.div`
  display: flex;
`;
const FooterText = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  margin: 0;
`;

export default function EmuFooter({ buttonPress }) {
  const [showFooter, setShowFooter] = useState(false);

  const yPosCheck = () => {
    if (typeof window !== "undefined") {
      setShowFooter(false);
      if (
        window.scrollY >= 200 &&
        window.scrollY <= document.body.scrollHeight - 1000
      ) {
        setShowFooter(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", yPosCheck);
      return () => {
        window.removeEventListener("scroll", yPosCheck);
      };
    }
  }, []);

  return (
    <EmuFooterWrapper className={showFooter ? "visible" : "hidden"}>
      <EmuFooterStyled className={showFooter ? "visible" : "hidden"}>
        <InnerContainer>
          <EmuFooterDetail />
          <PriceNButtonContainer>
            <EmuPrice />
            <Button buttonPress={buttonPress} />
          </PriceNButtonContainer>
        </InnerContainer>
      </EmuFooterStyled>
    </EmuFooterWrapper>
  );
}
