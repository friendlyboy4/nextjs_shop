import styled from "styled-components";
import { useState, useEffect } from "react";

const EmuHeaderStyled = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${(props) => props.theme.layout.emuHeaderHeight};
  /* backdrop-filter: ${(props) => props.theme.colors.headerBlur};
  -webkit-backdrop-filter: ${(props) => props.theme.colors.headerBlur}; */
  /* filter: drop-shadow(2px 0 5px #00000012); */
  z-index: 99;
  transition:
    top 0.2s ease,
    background-color 0.3s ease;
  /* transition-delay: .12s; */
  /* transform: ${(props) =>
    props.visible && props.yPos > 500 && "translateY(6.5rem)"}; */
  top: ${(props) => (props.visible ? "9.2rem" : "0rem")};
  &.trans {
    background-color: #00000022;
    box-shadow: 10px 0 5px #00000022;
  }
  &.white {
    background-color: #ffffff;
  }
`;

export default function EmuHeader({ visible, yPos }) {
  const [headerTransparent, setHeaderTransparent] = useState(true);

  const yPosCheck = () => {
    if (typeof window !== "undefined") {
      setHeaderTransparent(false);
      if (window.scrollY === 0) {
        setHeaderTransparent(true);
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
    <EmuHeaderStyled
      className={headerTransparent ? "trans" : "white"}
      visible={visible}
      yPos={yPos}
    ></EmuHeaderStyled>
  );
}
