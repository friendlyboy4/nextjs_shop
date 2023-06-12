// import Image from "@/components/image/Image"
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  border: 1px solid #e8e8e8;
  box-shadow: 4px 4px 8px #e8e8e8;
  width: 48rem;
  height: 57.6rem;
  @media(max-width: 1600px) {
    width: 30vw;
    height: 36vw;
  }
  
  /* height: 30vw; */
`
const CardInnerContainer = styled.div`
  width: 42.2rem;
  height: 50rem;
  margin: 2.6rem auto;
  padding: 0;
  @media(max-width: 1600px) {
    width: 26.4vw;
    height: 31.2vw;
    margin: 1.68vw auto;
  }
  /* width: 22vw;
  height: 26vw;
  margin: 1.4vw auto;
  padding: 0; */
`
const ImageContainer = styled.div`
  width: 42.2rem;
  height: 42.2rem;
  @media(max-width: 1600px) {
    width: 26.4vw;
    height: 26.4vw;
  }
  position: relative;
`
const CopyContainer = styled.div`
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: 1.8rem;
  @media(max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media(max-width: 768px) {
    font-size: 1.2rem;
  }
`
const Copy = styled.p`
  color: ${props => props.theme.fonts.fontColor};
  font-size: 1.1em;
`

const PriceBox = styled.p`
  font-weight: bold;
`

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`


export default function GalleryCard({id, title, price, image}) {
  return (
    <LinkStyled href={`/bikes/${id}`}>
      <Card>
        <CardInnerContainer>
          <ImageContainer>
            <Image
              src={image}
              alt={title}
              fill
            />
          </ImageContainer>
          <CopyContainer>
            <Copy>{title}</Copy>
            <PriceBox>${price}</PriceBox>
          </CopyContainer>
        </CardInnerContainer>
      </Card>
    </LinkStyled>
  )
}