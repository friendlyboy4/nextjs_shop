import Image from "next/image";
import styled from "styled-components";
import { ImageWrapper } from "./Hero";
import { HeroTextContainerStyled, HeroTextContent } from "./HeroTextContainer";

import orangeBush from "@/img/orangeBush/orangeBushHori.jpg";

/////// ORANGE BUSH ////////

const ImageStyled = styled(Image)`
  /* object-position: 90%; */
  /* transform: scale(1.2); */
  @media (max-width: 768px) {
    /* object-position: 80%; */
  }
`;

const HeroTextContainer = styled(HeroTextContainerStyled)`
  right: 5vw;
  bottom: 10%;
  @media (max-width: 768px) {
    bottom: 5%;
  }
`;

// const HeroTextContainer = styled(HeroTextContainerStyled)`
//   left: 60vw;
//   top: 40%;
//   @media (max-width: 1200px) {
//     left: 55vw;
//     top: 55%;
//   }
//   @media (max-width: 480px) {
//     left: 40vw;
//   }
// `;

export default function SlideOrangeBush() {
  return (
    <ImageWrapper>
      <HeroTextContainer>
        <HeroTextContent
          heading={
            <>
              Get off the <br /> beaten path
            </>
          }
          copy={
            <>
              Discover a new side <br /> to your city
            </>
          }
        />
      </HeroTextContainer>
      <ImageStyled
        src={orangeBush}
        alt="Emu in the bush"
        sizes="100vw"
        // unoptimized={true}
        placeholder="blur"
        fill
        style={{
          zIndex: 99,
          objectFit: "cover",
        }}
      />
    </ImageWrapper>
  );
}
