import styled from "styled-components";
import Image from "next/image";

const HeroContainer = styled.div`
  position: relative;
  font-family: 'Inter', sans-serif;
  width: 100%;
  aspect-ratio: 16/5;
  border-radius: 10px;
  filter: ${props => props.theme.effects.dropShadow};
  @media (max-width: 768px) {
    aspect-ratio: 5/2; 
  };
`

const MainHeadingBox = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 10;
  text-align: center;
`

const MainHeadingText = styled.h1`
  margin: .5rem;
  color: white;
  font-size: 8em;
  padding: .1em .2em .2em;
  line-height: 1;
  background-color: #000000aa;
  text-shadow: 4px 4px 5px #00000088;
  transition: opacity 0.2s ease, transform 0.2s ease;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 7em;
  };
  @media (max-width: 480px) {
    font-size: 6em;
  };
`


export default function PageHeadingComponent({text, imgSrc, imgThumbnail, imgAlt, }) {
  return (
    <HeroContainer>
      <MainHeadingBox>
        <MainHeadingText>{text}</MainHeadingText>
      </MainHeadingBox>
      <Image 
        src={imgSrc}
        alt={imgAlt}
        fill
        loading = 'eager'
        placeholder='blur'
        blurDataURL={`/_next/image?url=${imgSrc}&w=16&q=1`}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
        style={{
          objectFit: 'cover', 
          borderRadius: '10px',
        }}
      />
    </HeroContainer>
  )
}