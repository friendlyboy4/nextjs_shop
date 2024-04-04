import styled from "styled-components";

const TestRideButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 15rem;
  height: 90%;
  align-self: center;
  border: 2px solid black;
  padding: 0.5rem;
  background-color: #ff0000;
  color: white;
  box-shadow: 2px 2px 1px #00000088;
  /* box-shadow: 0 0 10px 0 #00000055; */
  border-radius: 5px;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px #000000aa;
    background-color: #cc0000;
  }
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
  @media (max-width: 1000px) {
    width: 12rem;
  }
  @media (max-width: 768px) {
    width: 9rem;
    padding: 0;
  }
  @media (max-width: 480px) {
    width: 6rem;
  }
`;

const ButtonText = styled.div`
  font-size: 2rem;
  /* font-family: "Outfit", sans-serif; */
  font-family: "Roboto Slab", serif;
  /* font-family: "Jost", sans-serif; */
  font-weight: bold;
  /* font-family: "Gasoek One", sans-serif; */
  line-height: 1.2;
  text-shadow: 0.07em 0 #00000088, 0 0.07em #00000088, -0.07em 0 #00000088,
    0 -0.07em #00000088;
  /* text-align: justify; */
  /* text-justify: inter-word; */
  /* margin: 0 -1em 0 0; */
  white-space: nowrap;
  margin: 0 auto;
  @media (max-width: 1000px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export default function Button({ buttonPress }) {
  return (
    <TestRideButton onClick={buttonPress}>
      <ButtonText>
        <div>Book a</div>
        <div>test ride</div>
      </ButtonText>
    </TestRideButton>
  );
}
