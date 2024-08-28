import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

const CallButtonStyled = styled.div`
  display: flex;
  background-color: #22c55e;
  color: white;
  height: 4rem;
  width: fit-content;
  margin-top: 2px;
  padding: 2rem;
  border-radius: 3rem;
  font-size: 2em;
  @media (max-width: 768px) {
    margin-right: 1rem;
    font-size: 1.6em;
    padding: 1.6rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2em;
    height: 2rem;
    padding: 2rem 1rem;
  }
`;

const CallText = styled.p`
  align-self: center;
  display: inline;
  margin: 0 0 0 1rem;
  &::after {
    content: "0450 519 496";
  }
  @media (max-width: 480px) {
    &::after {
      content: "CALL US!";
    }
    margin: 0 0 0 0.4rem;
  }
`;

export default function CallButton() {
  return (
    <a
      href="tel: 0450 519 496"
      style={{ textDecoration: "none" }}
    >
      <CallButtonStyled>
        <FaPhone style={{ alignSelf: "center" }} />
        <CallText></CallText>
      </CallButtonStyled>
    </a>
  );
}
