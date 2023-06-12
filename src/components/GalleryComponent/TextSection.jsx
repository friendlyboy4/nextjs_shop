import styled from "styled-components";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const TextSectionContainer = styled.div`
  font-family: 'Jost', sans-serif;
  color: ${props => props.theme.fonts.fontColor};
  font-size: 1rem;
  @media (max-width: 1200px) {
    font-size: 0.9rem; 
  }
  
  @media (max-width: 768px) {
    width: 100%; 
    margin-top: 0;
    padding: 0;
  }
`

const BikeTitle = styled.h2`
  margin: 0;
  font-size: 2.8em;
  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 2.4em;
  }
`

const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.8em;
`

const Detail = styled.p`
  margin: 0;
`

const Price = styled.p`
  font-size: 1.8em;
  font-weight: 600;
  margin-top: 1.4rem;
`

const PipeStyled = styled.span`
  display: inline;
  margin: 0;
  color: #00000033;
`

const BikeDescription = styled(ReactMarkdown)`
  font-size: 1.75em;
  line-height: 1.4;
  margin-bottom: 1.2em;
  & p:first-child {
    margin: 0;
  };
  & p:last-child {
    margin: 0;
  }

`

export default function TextSection({ data, custom }) {
  const {title, description, price, size, material, type} = data
  return (
    <TextSectionContainer>
      <BikeTitle>{title}</BikeTitle>
      { !custom && (
        <>
          <DetailsContainer>
            <Detail>{type}<Pipe/></Detail>
            
            <Detail>{material}<Pipe/></Detail>
            
            <Detail>{size}</Detail>
          </DetailsContainer>
          <Price>${price}</Price>
        </>
      )}
      <BikeDescription>{description}</BikeDescription>
    </TextSectionContainer>
  )
}


const Pipe = () => <PipeStyled>&nbsp;&nbsp;|&nbsp;&nbsp;</PipeStyled>
