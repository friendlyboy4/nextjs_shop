// import Image from "@/components/image/Image"
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1 0;
  text-decoration: none;
  color: ${props => props.theme.fonts.fontColor};
  font-family: 'Jost', sans-serif;
  font-size: 1.1rem;
  gap: 1rem;
  /* border: .1px solid black; */
  padding: 2rem;
  /* filter: ${props => props.theme.effects.dropShadow}; */
  filter: drop-shadow(3px 3px 4px #00000044);
  background-color: white;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`
const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  border: 1px solid #00000022;
  @media (max-width: 768px) {
    flex: 3;
  }
`

const ImageStyled = styled(Image)`
  object-fit: cover;
`

const TextContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: .8em;
  @media (max-width: 768px) {
    flex: 2; 
    /* font-size: 1.2em; */
  }
`

const Title = styled.h3`
  font-size: 2em;
  text-decoration: none;
  margin: 0;  
  
`

const Detail = styled.p`
  font-size: 1.7em;
  margin: 0;
`

const Price = styled(Detail)`
  font-weight: bold;
  padding-top: .3em;
`

export default function GalleryCardNew({slug, title, price, image}) {
  return (
    <Card
      href={`/bikes/${slug}`}
    >
      <ImageContainer>
        <ImageStyled
          src={image}
          alt={title}
          fill
        />
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Detail>This is a nice bike I like it a lot</Detail>
        <Price>${price}</Price>
      </TextContainer>
    </Card>
    // <Link href={`/bikes/${id}`}>  
    //   <Card>
    //     <CardInnerContainer>
    //       <ImageContainer>
    //         <Image
    //           src={image}
    //           alt={title}
    //           fill
    //         />
    //       </ImageContainer>
    //       <CopyContainer>
    //         <Copy>{title}</Copy>
    //         <PriceBox>${price}</PriceBox>
    //       </CopyContainer>
    //     </CardInnerContainer>
    //   </Card>
    // </Link>
  )
}