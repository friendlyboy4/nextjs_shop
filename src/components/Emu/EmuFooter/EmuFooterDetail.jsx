import styled from "styled-components";
import Image from "next/image";

import EMU from "./EMU";

import blue from "@/img/emuBlueTinyCrop.png";
import orange from "@/img/emuOrangeTinyCrop.png";

const Container = styled.div`
  /* background-color: #12273866; */
  /* box-shadow: 1px 1px black; */
  /* filter: drop-shadow(2px 2px #12273866); */
  display: flex;
  height: 100%;
  /* width: 100%; */
  align-items: center;
  padding: 0 2rem 0 0;
  @media (max-width: 768px) {
    padding: 0 1rem 0 0;
  }
  @media (max-width: 480px) {
    padding: 0 0.6rem 0 0;
  }
  /* border: 1px solid black; */
`;

const FooterText = styled.p`
  font-family: "Gasoek One", sans-serif;
  font-size: 2.2em;
  margin: 0;
`;

const ImageBox = styled.div`
  display: flex;
  position: relative;
  margin: 1rem;
  /* border: 1px solid #00000022; */
  /* height: calc(100% - 1rem); */
  height: 100%;
  width: 11rem;
  @media (max-width: 768px) {
    margin: 0.5rem;
    width: 8rem;
  }
  @media (max-width: 480px) {
    width: 6rem;
    height: 70%;
  }
`;

export default function EmuFooterDetail() {
  return (
    <Container>
      <EMU />
      <FooterText>IN</FooterText>
      <ImageBox>
        <Image
          src={blue}
          alt="blue emu icon"
          sizes="110px"
          style={{ objectFit: "cover", display: "block" }}
          fill
        />
      </ImageBox>
      <FooterText>OR</FooterText>
      <ImageBox>
        <Image
          src={orange}
          alt="orange emu icon"
          sizes="110px"
          style={{ objectFit: "cover" }}
          fill
        />
      </ImageBox>
    </Container>
  );
}
