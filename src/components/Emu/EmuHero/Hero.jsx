import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideBlueForest from "./SlideBlueForest";
import SlideBlueTraffic from "./SlideBlueTraffic";
import SlideOrangeBush from "./SlideOrangeBush";

const HeroContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 70rem;
  padding: 2rem;
  background-color: #4444441c;
  @media (max-width: 1200px) {
    height: 60rem;
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    height: 40rem;
    padding: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  z-index: 2;
  width: 100%;
  height: 66rem;
  @media (max-width: 1200px) {
    height: 57rem;
  }
  @media (max-width: 768px) {
    height: 38rem;
  }
`;

const SliderStyled = styled(Slider)`
  position: relative;
  width: 100%;
  height: 60rem;
  @media (max-width: 768px) {
    height: 40rem;
  }
`;

export default function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    lazyLoad: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <HeroContainer>
      <SliderStyled {...settings}>
        <SlideBlueForest />
        {/* <SlideBlueTraffic /> */}
        <SlideOrangeBush />
      </SliderStyled>
    </HeroContainer>
  );
}

// BUTTON STUFF
// const TestrideButton = styled.div`
//   position: absolute;
//   top: 10rem;
//   right: 10rem;
//   text-align: center;
//   border: 3px solid #062a4e;
//   background-color: #093c6e;
//   color: white;
//   width: 60%;
//   margin: 0 auto;
//   font-family: "Cabin", sans-serif;
//   font-weight: bold;
//   border-radius: 8px;
//   font-size: 1.8rem;
//   padding: 0.8rem 0.6rem;
//   box-shadow: 1px 3px 2px #00000088;
//   transition: background-color 0.2s, color 0.2s, transform 0.1s;
//   cursor: pointer;
//   z-index: 999;
//   &:hover {
//     background-color: #0066dd;
//   }
//   &:active {
//     box-shadow: 1px 0px 2px #00000088;
//     transform: translateY(2px);
//     background-color: #23aaf2;
//   }
// `;

// const HeroButton = styled.div`
//   margin-top: 1.6rem;
//   padding: 0.5rem 1rem;
//   /* border-radius: 10px; */
//   border: 1px solid #ffffff88;
//   outline: 1px solid #ffffff;
//   outline-offset: 2px;
//   width: fit-content;
//   transform: translate(6px, 2px);

//   background-color: #ffffff33;
//   filter: drop-shadow(3px 3px 3px black);
//   box-shadow: 2px 2px black;
// `;

// const HeroButtonText = styled.h2`
//   margin: 0;
//   font-size: 2.2rem;
//   font-family: "outfit", sans-serif;
//   text-shadow: 1px 2px 1px #00000088;
// `;
