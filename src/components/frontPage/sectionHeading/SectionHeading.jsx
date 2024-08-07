import styled from "styled-components";
import Link from "next/link";

const HeadingContainer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  margin: 6em auto 4em;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const HeadingText = styled.h2`
  font-size: 4em;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  margin: 0 auto;
  color: ${(props) => props.theme.fonts.fontColor};
`;

const SeeAllButton = styled(Link)`
  width: fit-content;
  margin: 0 auto;
  padding: 0.4rem 1rem;
  box-shadow: 2px 2px black;
  border: 1px solid black;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-weight: 500;
  text-decoration: none;
  color: inherit;
  background-color: #ffe500;
  transition: 0.1s ease;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 0 0;
  }
`;

const ButtonText = styled.p`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-size: 2em;
  margin: 0;
`;

export default function SectionHeading({ text, href }) {
  return (
    <HeadingContainer>
      <HeadingText>{text}</HeadingText>

      <SeeAllButton href={href}>
        <ButtonText>VIEW MORE</ButtonText>
      </SeeAllButton>
    </HeadingContainer>
  );
}
