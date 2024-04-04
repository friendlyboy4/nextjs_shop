import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  aspect-ratio: 3/1;
  font-size: 1.5rem;
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    aspect-ratio: initial;
  }
`;

const ImageBox = styled.div`
  position: relative;
  flex: 1 0 50%;
  @media (max-width: 1000px) {
    padding: 0 2em;
    flex: 0 0 40%;
  }
  @media (max-width: 768px) {
  }
`;

const TextBoxContainer = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4em;
  background-color: #dddddd88;
  backdrop-filter: blur(2px);
  @media (max-width: 1000px) {
    padding: 0 2em;
    flex: 0 0 60%;
  }
  @media (max-width: 768px) {
    flex: 1 0 30%;
    padding: 1em 2em 0;
  }
  @media (max-width: 480px) {
    padding: 1em 1em 0;
  }
`;

const TextBox = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 1em;
  }
`;

const FeatureHeading = styled.h3`
  font-size: 2.2em;
  font-family: "Inter", sans-serif;
  text-align: center;
  color: #222222;
  margin: 0 auto;
  @media (max-width: 1000px) {
    font-size: 1.8em;
  }
  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`;

const FeatureText = styled.p`
  font-size: 1.2em;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.fonts.aboutFontColor};
  line-height: 1.8;
  @media (max-width: 768px) {
    text-align: justify;
    text-justify: inter-word;
  }
  & b {
    color: black;
  }
`;

export default function AboutBox({ image, headline, text, reverse }) {
  return (
    <Container reverse={reverse}>
      <ImageBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Image
          src={image}
          alt="alt image text"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageBox>
      <TextBoxContainer>
        <TextBox>
          <FeatureHeading>{headline}</FeatureHeading>
          <FeatureText>{text}</FeatureText>
        </TextBox>
      </TextBoxContainer>
    </Container>
  );
}
