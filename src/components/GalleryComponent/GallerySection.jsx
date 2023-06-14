import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const GallerySectionContainer = styled.div`
  position: relative;
  width: 60%;
  @media (max-width: 1200px) {
    width: 55%; 
  }
  @media (max-width: 768px) {
    width: 100%; 
  }
`


const SlideContainer = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  &:focus {
    outline: none;
  }
`

const ThumbnailContainer = styled.div`
  aspect-ratio: 4/3;
  position: relative;
`

const ThumbnailSliderWrap = styled.div`
  position: relative;
  margin-top: 15px;
`


export default function GallerySection({ images, alt }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    lazyLoad: 'progressive',
  };

  const settingsThumbs = {
    slidesToShow: images.length-1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    arrows: false,
    lazyLoad: 'progressive',
  };
  return (
    <GallerySectionContainer>
      <Slider 
        {...settingsMain}
        asNavFor={nav2}
        ref={slider => (setSlider1(slider))}
      >
        {images.map((image) =>
          <SlideContainer key={image.id}
          >
            <Image 
              src={image.attributes.url} 
              alt={alt}
              placeholder='blur'
              blurDataURL={`/_next/image?url=${image.attributes.url}&w=16&q=1`} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
              fill 
              style={{objectFit: 'cover'}}
            />
          </SlideContainer>
        )}
      </Slider>
      <ThumbnailSliderWrap>
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={slider => (setSlider2(slider))}
    
          className='thumbSlides'
        >
          {images.map((image) =>
            <ThumbnailContainer key={image.id}>
              <Image 
                src={image.attributes.formats.thumbnail.url} 
                alt='bianchi'
                sizes="(max-width: 1920px) 125px"
                fill 
                style={{objectFit: 'cover', objectPosition: 'center'}}
              />
            </ThumbnailContainer>
          )}
        </Slider>
      </ThumbnailSliderWrap>
        


    </GallerySectionContainer>
  )
}
