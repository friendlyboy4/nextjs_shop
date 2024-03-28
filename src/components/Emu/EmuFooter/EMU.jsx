import styled from "styled-components";

const TheEmuContainer = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: fit-content;
  margin: 0 1rem 0 0.6rem;
  text-align: justify;
  text-justify: inter-character;
  @media (max-width: 480px) {
    margin: 0 0.6rem 0 0.2rem;
  }
`;

const WordContainer = styled.div`
  display: flex;
  /* justify-content: center; */
`;

const EmuWord = styled.p`
  /* height: 10rem; */
  /* flex: 1 1 50%; */
  /* border: 1px solid black; */
  /* width: 100%; */
  line-height: 0.8;
  margin: 0;
  font-size: 3.4em;
  font-family: "Gasoek One", sans-serif;
  @media (max-width: 768px) {
    line-height: 0.9;
  }
  /* text-align: justify;
  text-justify: inter-character; */
`;

export default function EMU() {
  return (
    <TheEmuContainer>
      <WordContainer>
        <EmuWord>T</EmuWord>
        <EmuWord style={{ margin: "0 " }}>H</EmuWord>
        <EmuWord>E</EmuWord>
      </WordContainer>
      <WordContainer>
        <EmuWord>E</EmuWord>
        <EmuWord style={{ margin: "0" }}>M</EmuWord>
        <EmuWord>U</EmuWord>
      </WordContainer>
    </TheEmuContainer>
  );
}
