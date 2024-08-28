import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 2rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
  border: 2px solid red;
`;

const FeatureHeading = styled.h3`
  font-size: 2em;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  text-align: center;
  color: #222222;
  margin: 0 auto;
  padding-bottom: 0.2em;
  @media (max-width: 1000px) {
    font-size: 1.8em;
    padding-bottom: 0;
  }
  @media (max-width: 768px) {
    /* margin-top: 2rem; */
  }
  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`;

const FeatureText = styled.span`
  font-size: 1.6em;
  /* font-family: "Inter", sans-serif; */
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
  color: ${(props) => props.theme.fonts.aboutFontColor};
  line-height: 2;
  margin-top: 0.6em;
  @media (max-width: 768px) {
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 0;
    line-height: 2;
    margin-top: 1em;
  }
  & b {
    color: #222222;
    font-weight: 600;
  }
`;

export default function WhyChooseSection() {
  return (
    <Container>
      <ul>
        <li>
          <FeatureText>Quality assurance</FeatureText>
        </li>
        <li>
          <FeatureText>Expert service</FeatureText>
        </li>
        <li>
          <FeatureText>Local knowledge</FeatureText>
        </li>
      </ul>
    </Container>
  );
}

// <TEXT>
// Local, face to face service:

// You wouldn't buy a car sight unseen - why should an E-Bike be any different? Our bikes come fully assembled by us and ready to ride, not packaged in a carton and shipped to your door in bits. We do this to ensure that each and every E-Mu is running flawlessly, and we want to make sure that you feel absolutely safe and confident in your E-Bike.

// Furthermore, if you are choosing to spend good money on an electric bike, we feel you should be able to see it, touch it and take it for a test ride before making a decision. Do you really want to

// we want to meet our customers and make sure that the E-Mu is right for them. We will happily take you for a test ride and show you how to get the most from your E-Mu. Do you really want to spend good money on an electric bike based on a couple

// Don't wait until you've already bought an E-Bike before etc.

// Expert service
// Our workshop provides one year free servicing on top of a two year warranty.
// </TEXT>
