import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.layout.contentWidth};
  margin: 2rem auto 8rem;  
  font-family: 'Jost', sans-serif;
  color: ${props => props.theme.fonts.fontColor};
  font-size: 1rem;
  line-height: 1.5;
  opacity: 1;
  transition: opacity 0.3s ease;
  ${props => props.fade && 'opacity: 0.6; pointer-events: none'};
  @media (max-width: 768px) {
    font-size: .9rem; 
  }
  @media (max-width: 480px) {
    font-size: .8rem;
    margin-top: 1rem;  
  } 
`

export default function ContentContainer( { children, fade } ) {
  return (
    <Container
      fade={fade}
    >{children}</Container>
  )
}