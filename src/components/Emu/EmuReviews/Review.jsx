import styled from "styled-components";
import Image from "next/image";
// import face from "@/img/portraits/one.jpg";

const ReviewItem = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 3rem;
  row-gap: 3em;
  font-family: "Jost", sans-serif;
  background-color: #aaaaaa11;
  backdrop-filter: blur(2px);
  border: 1px solid #88888822;
  border-radius: 10px;
  box-shadow: 3px 3px 5px #44444422;
  color: #222222;
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.$reverse ? "row" : "row-reverse")};
    padding: 2em;
    margin: 1rem 0;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const TextContainerStyled = styled.div``;

const QuoteBox = styled.p`
  color: gold;
  font-size: 4rem;
  &:after {
    content: '"';
  }
  display: inline;
`;
const Text = styled.p`
  display: inline;
  text-align: justify;
  text-justify: inter-word;
  margin: 0;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.6;
  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
`;

const PortraitContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: ${(props) => (props.$reverse ? "0 0 0 2em" : "0 2em 0 0")};
  }
  @media (max-width: 480px) {
    flex-direction: row;
    margin: -1.5em 2em 0 0;
  }
`;

const Portrait = styled.div`
  position: relative;
  border-radius: 50%;
  width: 8em;
  height: 8em;
  border: 1px solid #aaaaaaaa;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.show ? "1" : "0")};
`;

const PortraitTextContainer = styled.div`
  padding: 0 0 0.5em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.4em;
  @media (max-width: 768px) {
    padding: ${(props) =>
      props.$reverse ? "0.5em 0.5em 0 0" : "0.5em 0 0 0.5em"};
    text-align: ${(props) => (props.$reverse ? "right" : "left")};
  }
  @media (max-width: 480px) {
    padding: 0 0 0.5em 1em;
    text-align: left;
  }
`;

const Name = styled.p`
  margin: 0 0 0.3em 0;
  font-weight: 600;
`;

const Location = styled.p`
  margin: 0;
`;

const TextContainer = ({ text }) => {
  return (
    <TextContainerStyled>
      <Text>{text}</Text>
    </TextContainerStyled>
  );
};

const PortraitContainer = ({ name, location, face, reverse, show }) => {
  return (
    <PortraitContainerStyled $reverse={reverse}>
      <Portrait show={show}>
        <Image
          src={face}
          fill
          sizes="78px"
          style={{ objectFit: "contain", borderRadius: "50%" }}
          alt="portrait of the reviewer"
        />
      </Portrait>
      <PortraitTextContainer $reverse={reverse}>
        <Name>{name}</Name>
        <Location>{location}</Location>
      </PortraitTextContainer>
    </PortraitContainerStyled>
  );
};

export default function Review({ name, location, text, face, reverse, show }) {
  return (
    <ReviewItem $reverse={reverse}>
      <TextContainer text={text} />
      <PortraitContainer
        name={name}
        location={location}
        face={face}
        reverse={reverse}
        show={show}
      />
    </ReviewItem>
  );
}
