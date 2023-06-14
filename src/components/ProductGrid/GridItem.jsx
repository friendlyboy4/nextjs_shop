import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${props => props.theme.fonts.fontColor};
  @media (max-width: 768px) and (min-width: 480px) {
    ${props => props.frontpage && 
      'flex-direction: row; font-size: .9rem;'
    }
  }
`

const GridImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  transition: .3s ease-in-out;
  filter: ${props => props.theme.effects.dropShadow2};
  @media (max-width: 768px) and (min-width: 480px) {
    ${props => props.frontpage && 
      'flex: 1; margin-right: 1em;'
    }
  }
  @media (max-width: 480px) {
    ${props => props.frontpage && 
      'aspect-ratio: 8 / 5;'
    }
  }
`


const GridSizeBox = styled.div`
  position: absolute;
  background-color: #ffffffcc;
  border: 2px solid #ffffff;
  border-radius: 10px;
  top: .6em;
  right: .5em;
  padding: .2rem .6rem;
  font-size: 1.8em; 
  font-weight: 500;
  box-shadow: 1px 1px 5px #00000033;
  z-index: 90;
  @media (max-width: 768px) and (min-width: 480px) {
    ${props => props.frontpage && 
      'font-size: 1.6em;'
    }
  }
  & > p {
    margin: 0;
  }
`

const GridTextContainer = styled.div`
  padding: 0 1rem 0 0;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.fontFamily};
  @media (max-width: 768px) and (min-width: 480px) {
    ${props => props.frontpage && 
      'flex: 1;'
    }
  }
`
const GridTitle = styled.h3`
  color: ${props => props.theme.fonts.fontColor};
  margin: .4em 0 0;
  line-height: 1.5;
  font-size: 2.2em;
  font-weight: bold;
  border-bottom: 1px solid #00000022;
  @media (max-width: 768px) and (min-width: 480px) {
    ${props => props.frontpage && 
      'font-size: 2em; font-weight: bold;'
    }
  }
`

const GridText = styled.p`
  margin: .4em 0 0; 
  font-size: 1.8em;
`

const GridPrice = styled.p`
  width: fit-content; 
  padding: .2em .4em;
  background-color: #ffd700;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #00000033;
  font-size: 1.5em;
  font-weight: bold;
  margin: .4em 0;

`

export default function GridItem({ bike, frontpage, custom }) {
  const {slug, title, size, images, price, precis} = bike
  return (
    <LinkContainer 
      href={`/${!custom?'bikes':'customs'}/${slug}`}
      frontpage={frontpage}
    > 
      <GridImageContainer
        frontpage={frontpage}
      >
        <GridSizeBox 
          frontpage={frontpage}
        ><p>{size}</p></GridSizeBox>
        <Image
          src={images.data[0].attributes.url}
          alt={title}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${images.data[0].attributes.url}&w=16&q=1`}
          fill
          sizes={
            frontpage ? (
              "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            ):(
              "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            )
          }
          style={{objectFit: 'cover', borderRadius: '10px'}}
        />
      </GridImageContainer>

      <GridTextContainer
        frontpage={frontpage}
      >
        <GridTitle 
          frontpage={frontpage}
        >{title}</GridTitle>
        <GridText>{precis}</GridText>
        {!custom && (
          <GridPrice>${price}</GridPrice>
        )}
      </GridTextContainer>

    </LinkContainer>
  )
}

