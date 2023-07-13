import Image from 'next/image';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 20/9;
  filter: ${props => props.theme.effects.dropShadow};
  @media (max-width: 768px) {
    aspect-ratio: 10/6;
    width: 100vw;
    margin-left: -1rem;
    filter: none;
  }
  @media (max-width: 480px) {
    aspect-ratio: 10/7;
  }
`

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/1;
  overflow: hidden;
  @media (max-width: 768px) {
    aspect-ratio: 10/6;
  } 
  @media (max-width: 480px) {
    aspect-ratio: 10/7;
  }
`

export default function Hero({ images }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
  }
  const imageGallery = images.attributes.HeroImg
  
  return (
    <HeroContainer>
      <Slider {...settings}>
        {imageGallery.map((image, index) => (
          <SlideContainer key={image.id}>
            <Image
              src={image.hero_img_lrg.data.attributes.url}
              alt="banner image"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
              loading="eager"
              placeholder='blur'
              blurDataURL={`/_next/image?url=${image.hero_img_lrg.data.attributes.url}&w=16&q=1`}
              fill
              priority={index == 0 && true}
              style={{maxWidth: "100%", objectFit: "cover", objectPosition: "center"}}
            />
          </SlideContainer>
        ))}
      </Slider>
    </HeroContainer>
  )
}