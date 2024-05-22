import styled from "styled-components";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import wallpaper from "../../../assets/util/bike-wallpaper-vector.svg";

const FooterBlock = styled.div`
  border-top: 1px solid #00000011;
  font-family: ${(props) => props.theme.fonts.fontFamily};
  color: #333333;
  padding: 8rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: opacity 0.3s ease;
  ${(props) => props.fade && "opacity: 0.6"};
  @media (max-width: 768px) {
    padding: 6rem 0 1.5rem 0;
    font-size: 1.4rem;
  }
`;

const FooterContentContainer = styled.div`
  margin: 0 4rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  @media (max-width: 768px) {
    margin: 0 2rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (min-width: 1320px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

const CopyrightContent = styled.div`
  max-width: 1200px;
  margin: 0 4rem;
  @media (max-width: 768px) {
    margin: 0 2rem;
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
  @media (min-width: 1320px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

const FooterCopyrightContainer = styled.div`
  width: 100%;
  padding: 2rem 0 0;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #666666;
  border-top: 1px solid #00000022;
  background-image: url(${wallpaper.src});
  background-size: 60%;
  @media (max-width: 1200px) {
    background-size: 70%;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem 0;
    background-size: 80%;
  }
  @media (max-width: 480px) {
    background-size: 90%;
  }
`;

const LinkStyled = styled(Link)`
  width: fit-content;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;

  :hover {
    color: goldenrod;
  }
`;

const LinkStyledDSCW = styled.p`
  margin: 0;
`;

const FooterSocialsLogosContainer = styled.div`
  display: flex;
  font-size: 3rem;
`;

const InstaIcon = styled(FaInstagram)`
  margin: 1.65rem 1.65rem 0 -0.2rem;
  color: #777777;
  font-size: 1.3em;
  transition: color 0.3s ease;
  :hover {
    color: #bbbbbb;
  }
`;

const FBIcon = styled(FaFacebookSquare)`
  margin: 1.65rem 1.65rem 0 -0.2rem;
  color: #777777;
  border-radius: 12px;
  font-size: 1.3em;
  transition: color 0.3s ease;
  :hover {
    color: #bbbbbb;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2.2;
  @media (max-width: 700px) {
    line-height: 2.4;
  }
`;

const FooterContactSection = styled(FooterColumn)`
  flex: 3 0 0;
  min-width: 36rem;
  @media (max-width: 600px) {
    min-width: 30rem;
  }
`;

const FooterNavSection = styled(FooterColumn)`
  flex: 1 0 0;
  min-width: 16rem;
  @media (max-width: 480px) {
    margin-top: 1rem;
    padding-top: 2.2rem;
    border-top: 1px solid #00000033;
  }
`;

const FooterOpeningHoursSection = styled(FooterColumn)`
  flex-direction: row;
  p {
    margin: 0;
  }
  @media (max-width: 480px) {
    margin-top: 3rem;
    padding-top: 2.4rem;
    border-top: 1px solid #00000033;
  }
`;

const Days = styled(FooterColumn)`
  margin-right: 8rem;
  flex-shrink: 0;
  @media (max-width: 1200px) {
    margin-right: 4vw;
  }
`;

const Times = styled(FooterColumn)`
  flex: 1 0;
`;

export default function Footer({ fade }) {
  return (
    <FooterBlock fade={fade}>
      <FooterContentContainer>
        <FooterContactSection id="contact">
          <LinkStyledDSCW>Doc Sprocket Cycle Workshop</LinkStyledDSCW>
          <LinkStyled
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to Doc Sprocket Google Maps entry"
            href="https://g.page/doc-sprocket-cycle-workshop?share"
          >
            555A King St Newtown NSW 2042
          </LinkStyled>
          <LinkStyled
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to send an email to Doc Sprocket"
            href="mailto:info@docsprocket.com.au"
          >
            info@docsprocket.com.au
          </LinkStyled>
          <LinkStyled
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to call Doc Sprocket"
            href="tel: 0450519496"
          >
            0450 519 496
          </LinkStyled>
          <FooterSocialsLogosContainer>
            <Link
              rel="nofollow noopener noreferrer"
              target="_blank"
              aria-label="Link to Doc Sprocket Instagram page"
              href="https://www.instagram.com/docsprocketnewtown/"
            >
              <InstaIcon />
            </Link>
            <Link
              rel="nofollow noopener noreferrer"
              target="_blank"
              aria-label="Link to Doc Sprocket Facebook page"
              href="https://www.facebook.com/docsprocketnewtown/"
            >
              <FBIcon />
            </Link>
          </FooterSocialsLogosContainer>
        </FooterContactSection>
        <FooterNavSection>
          <LinkStyled href="/">Home</LinkStyled>
          <LinkStyled href="/bikes">Bikes</LinkStyled>
          <LinkStyled href="/workshop">Workshop</LinkStyled>
          <LinkStyled href="/customs">Customs</LinkStyled>
          <LinkStyled href="/ebikes">eBikes</LinkStyled>
          <LinkStyled href="/about">About</LinkStyled>
        </FooterNavSection>
        <FooterOpeningHoursSection>
          <Days>
            <p>mon</p>
            <p>tue</p>
            <p>wed</p>
            <p>thu</p>
            <p>fri</p>
            <p>sat</p>
            <p>sun</p>
          </Days>
          <Times>
            <p>x</p>
            <p>10 - 17.30</p>
            <p>10 - 17.30</p>
            <p>10 - 17.30</p>
            <p>10 - 17.30</p>
            <p>11 - 16.00</p>
            <p>x</p>
          </Times>
        </FooterOpeningHoursSection>
      </FooterContentContainer>
      <FooterCopyrightContainer>
        <CopyrightContent>
          &copy; DSCW {new Date().getFullYear()} | Built with&nbsp;
          <Link
            style={{ color: "inherit" }}
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://nextjs.org/"
          >
            NextJS
          </Link>{" "}
          by House of Sprocqu&eacute;
        </CopyrightContent>
      </FooterCopyrightContainer>
    </FooterBlock>
  );
}
