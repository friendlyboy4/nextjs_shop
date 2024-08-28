import styled from "styled-components";


const Container = styled.span`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.fonts.fontColor};
  padding: 2rem 0;
  border-top: 3px solid #00000022;
  width: 66%;
  max-width: 650px;
`

const TextContainer = styled.div`

`

const ImageContainer = styled.div`
  border: 3px solid black;
  width: 20rem;
`

const BlogTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`

const BlogDate = styled.p`
  font-size: 1.4rem;
  margin: 0;
`

export default function BlogListing({ title, text, date, link }) {
  return (

    <a href={`https://www.google.com/${link}`}
      style={{ textDecoration: 'none', display: 'inline', }}>
      <Container>
        <TextContainer>
          <BlogDate>{date}</BlogDate>
          <BlogTitle>{title}</BlogTitle>
          <h2>{text}</h2>
        </TextContainer>
        <ImageContainer></ImageContainer>
      </Container>
    </a>

  )
}