import styled from "styled-components";
import logo from "@/assets/logos_icons/dsLogo.svg";
import Link from "next/link";
import Image from "next/image";

const LogoContainer = styled(Link)`
  position: relative;
  width: 10rem;
  text-align: left;
  filter: invert(16%) sepia(1%) saturate(0%) hue-rotate(96deg) brightness(96%)
    contrast(87%);
  transition: filter 0.3s ease;
  @media (max-width: 768px) {
    height: 3.6rem;
  }
  :hover {
    filter: invert(69%) sepia(17%) saturate(0%) hue-rotate(204deg)
      brightness(103%) contrast(96%);
  }
`;

export default function HeaderLogo() {
  return (
    <LogoContainer href="/">
      <Image
        src={logo}
        alt="Doc Sprocket Shop Logo"
        sizes="(max-width: 480px) 100px, (max-width: 768px) 100px, (max-width: 1920px) 100px"
        fill
      />
    </LogoContainer>
  );
}
