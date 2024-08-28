import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import GoogleLogo from "@/../../public/google-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-top: 0.3rem;
  padding: 1px 7px 1px 1px;
  // border: 1px solid #00000022;
  // border-radius: 1rem;
  // box-shadow: 2px 2px 4px #00000018;
  // background-color: #ffffff22;
`;

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const StarBox = styled.div`
  display: flex;
  margin-bottom: 0.2em;
`;

const FaStarStyled = styled(FaStar)`
  color: #fed000;
  font-size: 1.6em;
  margin-right: 0.2em;
`;

const Text = styled.div`
  font-size: 1.6em;
  color: #333333;
`;

const GoogleLogoContainer = styled.div`
  position: relative;
  width: 4em;
  height: 4em;
  margin-right: 0.5em;
`;

export default function ReviewWidget() {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to Doc Sprocket Google Reviews"
      href="https://search.google.com/local/reviews?placeid=ChIJw7JX3XexEmsRlt53xMPk0UU"
      style={{ textDecoration: "none" }}
    >
      <Container>
        <GoogleLogoContainer>
          <Image
            src={GoogleLogo}
            alt="Google Logo"
            // sizes="(max-width: 480px) 92px, 150px"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </GoogleLogoContainer>
        <RatingsContainer>
          <StarBox>
            <FaStarStyled />
            <FaStarStyled />
            <FaStarStyled />
            <FaStarStyled />
            <FaStarStyled />
          </StarBox>
          <Text>
            Rated <b>4.9</b> from <b>146</b> reviews
          </Text>
        </RatingsContainer>
      </Container>
    </Link>
  );
}

{
  /* <script
src="https://static.elfsight.com/platform/platform.js"
data-use-service-core
defer
></script>
<div
class="elfsight-app-38d8c482-6124-4c6f-855b-9c81aeb83dec"
data-elfsight-app-lazy
></div> */
}
