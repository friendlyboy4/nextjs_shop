import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  max-width: 160rem;
  margin: 10rem auto;
  padding: 0 4vw;
`


export default function SectionContainer({ children }) {
  return (
    <ContainerStyled>
      { children }
    </ContainerStyled>
  )
}