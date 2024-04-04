import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  aspect-ratio: 3/1;
  font-size: 1.6rem;
  @media (max-width: 1200px) {
    aspect-ratio: 5/2;
  }
  @media (max-width: 1000px) {
    /* aspect-ratio: 2/1; */
    font-size: 1.35rem;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    height: fit-content;
    font-size: 1.3rem;
    aspect-ratio: initial;
  }
`;

const ImageBox = styled.div`
  position: relative;
  flex: 1 0 60%;
  border-radius: 10px;
  border: 1px solid #00000022;
  filter: drop-shadow(3px 6px 3px #00000033) drop-shadow(8px 16px 8px #00000022);
  @media (max-width: 1200px) {
    flex: 0 0 55%;
  }
  @media (max-width: 1000px) {
    flex: 0 0 50%;
  }
  @media (max-width: 768px) {
    flex: 0 1 60vw;
  }
`;

const TextBoxContainer = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 0 4em 0 0; */
  padding: ${(props) => (!props.reverse ? "0 2em 0 0" : "0 0 0 2em")};
  @media (max-width: 1200px) {
    flex: 0 0 45%;
    /* padding: 0 2em 0 0; */
  }
  @media (max-width: 1000px) {
    flex: 0 0 50%;
    /* padding: 0 2em 0 0; */
  }
  @media (max-width: 768px) {
    padding: 1em 1.4em 0;
    flex: 0 1 auto;
  }
  @media (max-width: 600px) {
    padding: 1em 0 0;
  }
`;

const TextBox = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 1em;
  }
`;

const FeatureHeading = styled.h3`
  font-size: 2em;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-align: center;
  color: #222222;
  margin: 0 auto;
  padding-bottom: 0.2em;
  @media (max-width: 1000px) {
    font-size: 1.8em;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    /* margin-top: 2rem; */
  }
  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`;

const FeatureText = styled.p`
  font-size: 1.2em;
  /* font-family: "Inter", sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
  color: ${(props) => props.theme.fonts.aboutFontColor};
  line-height: 2;
  margin-top: 0.6em;
  @media (max-width: 1000px) {
    /* line-height: 1.8; */
  }
  @media (max-width: 768px) {
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 0;
    line-height: 2;
    margin-top: 1em;
  }
  & b {
    color: #222222;
    font-weight: 600;
  }
`;

export default function AboutBoxVariant({ image, headline, text, reverse }) {
  return (
    <Container reverse={reverse}>
      <TextBoxContainer reverse={reverse}>
        <TextBox>
          <FeatureHeading>{headline}</FeatureHeading>
          <FeatureText>{text}</FeatureText>
        </TextBox>
      </TextBoxContainer>
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
          sizes="(max-width: 1920px) 50vw, (max-width: 1000px) 95vw"
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </ImageBox>
    </Container>
  );
}
