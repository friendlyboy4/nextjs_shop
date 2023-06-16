import styled from "styled-components"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BannerItemContainer = styled(Link)`
  font-family: 'Inter', sans-serif;
  position: relative;
  height: 100%;
  width: 100%;
  height: 33vw;
  max-height: 30rem;
  font-size: 1rem;
  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
  @media (max-width: 520px) {
    font-size: 0.65rem;
  }
`

const BannerItemHeadingBox = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 0;
  left: 0;
  z-index: 10;
  text-align: center;
`

const BannerItemTextBox = styled(BannerItemHeadingBox)`
  width: 80%;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) and (max-width: 1000px) {
    transform: translate(-50%, -65%);
  }
  @media (max-width: 768px) {
    transform: translate(-50%, -60%);
  }
`

const BannerHeadingText = styled.h2`
  margin: .5rem;
  color: white;
  font-size: 8em;
  padding: .1em .2em .2em;
  line-height: 1;
  background-color: #000000aa;
  text-shadow: 4px 4px 5px #00000088;
  transition: opacity 0.2s ease, transform 0.2s ease;
  border-radius: 10px;
  ${props => !props.hover} {
    opacity: 0;
    transform: translate(0, -10px);
  }
`

const BannerCopyText = styled.p`
  color: white;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: 2.4em;
  background-color: #000000aa;
  text-shadow: 4px 4px 5px #00000088;
  opacity: 0;
  z-index: 99;
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 10px;
  ${props => !props.hover} {
    opacity: 1;
    transform: translate(0, -10px);
  }
`

const BannerFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
  z-index: 98;
  border-radius: 10px;
  transition: 
    backdrop-filter 0.3s ease, 
    background-color 0.3s ease,
    border 0.1s ease;
  ${props => !props.blur} {
    backdrop-filter: blur(5px);
    background-color: #ffffff22;
    border: 1px solid black;
  }
`

const ShadowBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
  z-index: 0;
  background-color: #ffffff;
  border-radius: 10px;
  filter: ${props => props.theme.effects.dropShadow};
`

export default function BannerItem({image, imageAlt, linkTo, sectionHeading, text}) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true)
  }

  const stopHover = () => {
    setHover(false)
  }

  return (
      <BannerItemContainer
        onMouseOver={handleHover}
        onMouseLeave={stopHover}
        href={linkTo}
      >
        <BannerFilter 
          blur={hover}
        />
        <ShadowBox 
          blur={hover}
        />
        <Image
          src={image}
          alt={imageAlt}
          placeholder='blur'
          blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{objectFit: 'cover', borderRadius: '10px'}}
        />
        <BannerItemHeadingBox>
          <BannerHeadingText hover={hover}>{sectionHeading}</BannerHeadingText>
        </BannerItemHeadingBox>
        <BannerItemTextBox>
          <BannerCopyText hover={hover}>{text}</BannerCopyText>
        </BannerItemTextBox>
      </BannerItemContainer>
  )
}