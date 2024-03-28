import Image from "next/image";
import styled from "styled-components";
import { ImageWrapper } from "./Hero";
import { HeroTextContainerStyled, HeroTextContent } from "./HeroTextContainer";

import blueForest from "@/img/blueForest/blueForestOrigCrop2.jpg";

/////// BLUE FOREST ////////

const ImageStyled = styled(Image)`
  /* object-position: 90%; */
  /* transform: scale(1.2); */
  @media (max-width: 1000px) {
    object-position: 80%;
  }
  @media (max-width: 768px) {
    object-position: 60%;
  }
`;

const HeroTextContainer = styled(HeroTextContainerStyled)`
  right: 5vw;
  bottom: 10%;
  @media (max-width: 768px) {
    bottom: 5%;
  }
`;

export default function SlideBlueForest() {
  return (
    <ImageWrapper>
      <HeroTextContainer>
        <HeroTextContent
          heading={
            <>
              Introducing: <br />
              The E-Mu
              <br /> Urban Commuter
            </>
          }
          copy={
            <>
              Designed with love and care by <br /> Doc Sprocket Cycle Workshop{" "}
              <br />
              in Newtown, Sydney
            </>
          }
        />
      </HeroTextContainer>
      <ImageStyled
        src={blueForest}
        alt="Emu posing in the forest"
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
