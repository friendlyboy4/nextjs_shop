import styled from "styled-components";

const VideoTextContainerStyled = styled.div`
  position: absolute;
  padding: 2em;
  width: fit-content;
  z-index: 999;
  font-size: 0.9rem;
  background-color: #00000022;
  color: white;
  font-family: "Inter", sans-serif;
  right: 5vw;
  bottom: 10%;
  @media (max-width: 1600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1200px) {
    font-size: 0.6rem;
  }
  @media (max-width: 768px) {
    font-size: 0.45rem;
    bottom: 5%;
  }
  @media (max-width: 480px) {
    font-size: 0.4rem;
  }
`;

const VideoHeader = styled.h2`
  font-size: 7em;
  text-align: right;
  margin: 0;
  font-weight: 500;
  text-shadow: 2px 2px 2px #00000066;
`;

const VideoCopy = styled.h3`
  margin: 0;
  font-size: 4em;
  text-align: right;
  line-height: 1.4;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  text-shadow: 2px 2px 2px #00000066;
`;

const VideoTextDivider = styled.div`
  width: 80%;
  border-bottom: 2px solid white;
  margin: 1em 1em 1em auto;
`;

export default function VideoTextContainer({ heading, copy }) {
  return (
    <VideoTextContainerStyled>
      <VideoHeader>{heading}</VideoHeader>
      <VideoTextDivider />
      <VideoCopy>{copy}</VideoCopy>
    </VideoTextContainerStyled>
  );
}
