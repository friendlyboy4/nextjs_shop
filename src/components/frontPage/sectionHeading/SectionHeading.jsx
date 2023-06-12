import styled from "styled-components";
import Link from "next/link";

const HeadingContainer = styled.div`
  font-size: 1rem;
  display: flex;  
  flex-direction: column;
  margin: 10em auto 4em;  
  @media (max-width: 768px) {
    font-size: .8rem;
  }
  @media (max-width: 480px) {
    font-size: .7rem; 
  }
`

const HeadingText = styled.h2`
  font-size: 4em;
  font-family: 'Jost', sans-serif;
  margin: 0 auto;
  color: ${props => props.theme.fonts.fontColor};
`

const SeeAllButton = styled(Link)`
  width: fit-content;
  margin: 0 auto;
  padding: .4rem 1rem;
  box-shadow: 2px 2px black;
  border: 1px solid black;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  background-color: #ffe500;
  transition: .1s ease;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 0 0;
  }
`

// const SeeAllButton = styled(Link)`
//   width: fit-content;
//   margin: 0 auto;
//   padding: 1em;
//   position: relative;
//   display: inline;
//   text-decoration: none;
//   color: white;
//   background-color: #222222;
//   box-shadow: 
//     0 0 0 1px white,
//     0 0 0 2px #222222,
//     3px 3px 4px #00000066;
//   transition: .1s ease;
//   &:active {
//     box-shadow: 
//     0 0 0 1px white,
//     0 0 0 2px #222222,
//     1px 1px 1px #000000;
//     transform: translate(1px, 1px);
//     background-color: #888888;
//   }
// `



const ButtonText = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 2em;
  margin: 0;
`



export default function SectionHeading({ text, href }) {
  return (
    <HeadingContainer>
      
      <HeadingText>
        { text }
      </HeadingText>
      
      <SeeAllButton href={href}>
        <ButtonText>VIEW MORE</ButtonText>
      </SeeAllButton>
    </HeadingContainer>
  )
}