import styled from "styled-components";

export const HeroTextContainerStyled = styled.div`
  position: absolute;
  padding: 2em;
  width: fit-content;
  z-index: 999;
  font-size: 0.9rem;
  background-color: #00000022;
  border-radius: 15px;
  color: white;
  font-family: "Inter", sans-serif;
  @media (max-width: 1600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1200px) {
    font-size: 0.6rem;
  }
  @media (max-width: 768px) {
    font-size: 0.45rem;
  }
  @media (max-width: 480px) {
    font-size: 0.4rem;
  }
`;

const HeroHeader = styled.h2`
  font-size: 7em;
  text-align: right;
  margin: 0;
  font-weight: 500;
  text-shadow: 2px 2px 2px #00000066;
`;

const HeroCopy = styled.h3`
  margin: 0;
  font-size: 4em;
  text-align: right;
  line-height: 1.4;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  text-shadow: 2px 2px 2px #00000066;
`;

const HeroTextDivider = styled.div`
  width: 80%;
  border-bottom: 2px solid white;
  margin: 1em 1em 1em auto;
`;

const HeroCTAContainer = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  border: 3px solid #22c55e;
  background-color: #22c55e;
  width: fit-content;
`;

const HeroCallNowText = styled.p`
  font-size: 4em;
  padding: 0.5em 1em;
  text-decoration: none;
  color: #ffffff;
  margin: 0;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  text-shadow: 2px 2px 2px #00000066;
`;

export const HeroTextContent = ({ heading, copy }) => (
  <>
    <HeroHeader>{heading}</HeroHeader>
    <HeroTextDivider />
    <HeroCopy>{copy}</HeroCopy>
    <a
      href="tel: 0450 519 496"
      style={{
        textDecoration: "none",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <HeroCTAContainer>
        <HeroCallNowText style={{ textDecoration: "none" }}>
          From $2199 - Call Now!
        </HeroCallNowText>
      </HeroCTAContainer>
    </a>
  </>
);
