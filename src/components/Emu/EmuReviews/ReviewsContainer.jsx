import styled from "styled-components";
import Review from "./Review";
import roar from "@/img/portraits/roar.jpg";
import adam from "@/img/portraits/adam.jpg";
import matty from "@/img/portraits/matty.jpg";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 650px;
  }
`;

const Wrapper = styled.div`
  padding: 0 0.5rem;
  display: flex;
`;

const Divider = styled.div`
  position: relative;
  border-right: 2px solid #88888833;
  height: 15rem;
  margin: 0 1rem;
  align-self: center;
`;

export default function ReviewsContainer() {
  const [showPortrait, setShowPortrait] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPortrait(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <Review
        name="Roar"
        location="Alexandria"
        text="My Emu has totally changed my lifestyle and given me the freedom to take long journeys all across Sydney. 
        The hills don't bother me as I cruise along with my little dog in the back basket, wind in my hair, smiling from ear to ear. 
        I've never had any issues with my Emu and I loved it so much I made my partner get one too!"
        face={roar}
        show={showPortrait}
      />
      <Review
        name="Adam"
        location="Wollongong"
        text="I wanted an alternative to driving to work, but the commute was a little too far for a regular bike. 
        The E-Mu proved to be an ideal solution. It's helped me to be more active and has never missed a beat. 
        It's also been great to just set off on adventures, visit friends and discover interesting new places."
        face={adam}
        reverse="true"
        show={showPortrait}
      />
      <Review
        name="Matty"
        location="Marrickville"
        text="I'm definitely cooler because of my E-Mu eBike.
        She's powerful, flashy, and gets me far beyond the plains of Newtown on a single charge.
        The luggage rack fits my milkcrate and is perfect for a load of groceries. Thanks Doc!"
        face={matty}
        show={showPortrait}
      />
    </Container>
  );
}
