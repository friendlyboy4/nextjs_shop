import Image from "next/image";
import styled from "styled-components";
import { ImageWrapper } from "./Hero";
import { HeroTextContainerStyled, HeroTextContent } from "./HeroTextContainer";

import orangePath from "@/img/orangePathMedium.jpg";

/////// ORANGE PATH ////////

const ImageStyled = styled(Image)`
  /* object-position: 90%; */
  /* transform: scale(1.2); */
  @media (max-width: 768px) {
    /* object-position: 80%; */
  }
`;

const HeroTextContainer = styled(HeroTextContainerStyled)`
  left: 60vw;
  top: 50%;
  @media (max-width: 1200px) {
    left: 50vw;
  }
  @media (max-width: 480px) {
    left: 40vw;
  }
`;

export default function SlideOrangePath() {
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
        src={orangePath}
        alt="Emu on the path"
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
