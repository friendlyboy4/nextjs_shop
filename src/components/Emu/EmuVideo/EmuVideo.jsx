import styled from "styled-components";
import Image from "next/image";
import EmuGif from "@/img/emu.gif";
import VideoTextContainer from "./VideoTextContainer";

const VideoContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 70rem;
  padding: 2rem;
  background-color: #4444441c;
  @media (max-width: 1200px) {
    height: 60rem;
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    height: 40rem;
    padding: 1rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  display: block;
  z-index: 2;
  width: 100%;
  height: 66rem;
  @media (max-width: 1200px) {
    height: 57rem;
  }
  @media (max-width: 768px) {
    height: 38rem;
  }
`;

export default function EmuVideo() {
  return (
    <VideoContainer>
      <VideoTextContainer
        heading="hello"
        copy="this is a test"
      />
      <VideoWrapper>
        <Image
          src={EmuGif}
          alt="it's pronounced JIF"
          // sizes="(max-width: 480px) 92px, 150px"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </VideoWrapper>
    </VideoContainer>
  );
}
