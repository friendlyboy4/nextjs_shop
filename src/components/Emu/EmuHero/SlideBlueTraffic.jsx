import Image from "next/image";
import styled from "styled-components";
import { ImageWrapper } from "./Hero";
import { HeroTextContainerStyled, HeroTextContent } from "./HeroTextContainer";

import blueTraffic from "@/img/blueTraffic/blueTrafficLrgFinal.jpg";

/////// BLUE TRAFFIC ////////

const ImageStyled = styled(Image)`
  object-position: 40% 50%;
  /* transform: scale(1.2); */
  @media (max-width: 1200px) {
    object-position: 60% 50%;
  }
`;

const HeroTextContainer = styled(HeroTextContainerStyled)`
  right: 5vw;
  bottom: 10%;
  /* @media (max-width: 768px) {
    bottom: 5%;
  } */
`;

// const HeroTextContainer = styled(HeroTextContainerStyled)`
//   right: 10vw;
//   top: 30%;
//   @media (max-width: 1200px) {
//     left: 50vw;
//   }
//   @media (max-width: 768px) {
//     left: 45vw;
//     top: 40%;
//   }
//   @media (max-width: 480px) {
//     left: 30vw;
//     top: 50%;
//   }
// `;

export default function SlideBlueTraffic() {
  return (
    <ImageWrapper>
      <HeroTextContainer>
        <HeroTextContent
          heading={
            <>
              Conquer
              <br /> your <br /> commute
            </>
          }
          copy={
            <>
              Travel in style, save time <br />
              and keep fit - no sweat!
            </>
          }
        />
      </HeroTextContainer>
      <ImageStyled
        src={blueTraffic}
        alt="Emu in the city"
        sizes="100vw"
        quality={90}
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
