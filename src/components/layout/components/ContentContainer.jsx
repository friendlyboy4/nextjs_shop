import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.layout.contentWidth};
  margin: 0 auto;
  padding: 2rem 0 8rem;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: ${(props) => props.theme.fonts.fontColor};
  font-size: 1rem;
  line-height: 1.5;
  opacity: 1;
  transition: opacity 0.3s ease;
  ${(props) => props.fade && "opacity: 0.7; pointer-events: none"};
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-top: 1rem;
  }
`;

export default function ContentContainer({ children, fade }) {
  return <Container fade={fade}>{children}</Container>;
}
