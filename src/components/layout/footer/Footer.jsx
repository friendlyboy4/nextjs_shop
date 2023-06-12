// export default function Footer() {
//   return (
//     <h1>This is a test footer!!!</h1>
//   )
// }

import styled from 'styled-components';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa'

// import { Headline } from '../layout/typefaces';


const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;  
  border-top: 3px solid ${props => props.theme.colors.footerColorDark};
  width: 100%;
  background-color: ${props => props.theme.colors.footerColor};
  z-index: 9997;
  bottom: 0;
  padding: 2rem 0 0; 
  color: #ffffffee;
  /* scroll-snap-align: end; */
  & a {
    color: #ffffffee;
  }
  @media (max-width: 480px) {
    padding: 1rem 0 0;
  }
`

const CopyrightContainer = styled.div`
  font-size: 1.6rem;
  padding-bottom: 10px;
  margin: 0 auto;
  @media (max-width: 480px) {
    padding-bottom: 6px;
  }
`

const CopyrightText = styled.div`
  display: flex;
  font-size: 1.2rem;
  text-align: justify;
  text-justify: inter-word;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    line-height: 1.6;
  }
`

const InfoContainer = styled.div`
  display: flex;
  font-size: 2rem;
  line-height: 2;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 3rem;
  padding: 0 3rem;
  @media (max-width: 1200px) {
    font-size: 1.8rem;
    
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    justify-content: space-between;    
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-right: 10rem; 
  }
`
const ContactDetails = styled.div`

`
const ContactLink = styled.a`
  text-decoration: underline;
  display: flex;
  align-items: center;
  line-height: 3;
  cursor: pointer;
  z-index: 9999;
`
const OpeningHoursContainer = styled.div`
  display: flex;
  line-height: 2.4;
`

const OpeningHoursWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const PhoneIcon = styled(FaPhoneAlt)`
  margin-right: 1rem;
`

const EmailIcon = styled(FaEnvelope)`
  margin-right: 1rem;
`

const AddressIcon = styled(FaMapMarkerAlt)`
  margin-right: 1rem;
`

const DaysList = styled.ul`
  margin: 0 5rem 0 0;
  list-style-type: none;
  padding-left: 0;
`

const TimesList = styled.ul`
  margin: 0 5rem 0 0;
  list-style-type: none;
  padding-left: 0;
`

const SocialsContainer = styled.div`
  display: flex;
  margin: 1rem 0;
`
const SocialMediaContact = styled.a`
  background-color: white;
  margin: 0 1rem 0 0;
  font-size: 2rem;
  border: black 2px solid;
  border-radius: 12px;
  text-align: center;
  box-shadow: 2px 2px 3px #11111166;
`

const FBIcon = styled(FaFacebook)`
  margin: 1.3rem 1.3rem 0.3rem;
  color: #222222;
`
const FooterHeading = styled.h3`
  font-size: 2.4rem;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
`

const InstaIcon = styled(FaInstagram)`
  margin: 1.3rem 1.3rem 0.3rem;
  color: #222222;
`

const Footbox = styled.div`
  bottom: 1px;
  position: absolute;
  visibility: hidden;
  height: calc(100vh - 8rem);
  width: 100%;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    height: calc(100vh - 6rem);
  }
`

export default function Footer() {
  return (
    <FooterContainer id="contact">
      
      <InfoContainer>
        <ContactContainer>
          <ContactDetails>
            <FooterHeading>Get in touch...</FooterHeading>
            <ContactLink href="tel: +61450519496">
              <PhoneIcon/>0450 519 496
            </ContactLink>
            <ContactLink href="mailto:info@docsprocket.com.au">
              <EmailIcon/>info@docsprocket.com.au
            </ContactLink>
            <ContactLink href="https://g.page/doc-sprocket-cycle-workshop?share">
              <AddressIcon/>555A King Street Newtown NSW 2042
            </ContactLink>
          </ContactDetails>
          <SocialsContainer>
            <SocialMediaContact href="https://www.instagram.com/docsprocketnewtown/">
              <InstaIcon/>
            </SocialMediaContact>
            <SocialMediaContact href="https://www.facebook.com/docsprocketnewtown/">
              <FBIcon/>
            </SocialMediaContact>
          </SocialsContainer>
        </ContactContainer>
        <OpeningHoursWrapper>
        <FooterHeading>Opening hours:</FooterHeading>
        <OpeningHoursContainer>
          <DaysList>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </DaysList>
          <TimesList>
            <li>closed</li>
            <li>10:00 &nbsp;-&nbsp; 17:30</li>
            <li>10:00 &nbsp;-&nbsp; 17:30</li>
            <li>10:00 &nbsp;-&nbsp; 17:30</li>
            <li>10:00 &nbsp;-&nbsp; 17:30</li>
            <li>11:00 &nbsp;-&nbsp; 16:00</li>
            <li>closed</li>
          </TimesList>
        </OpeningHoursContainer>
        </OpeningHoursWrapper>
      </InfoContainer>

      <CopyrightContainer>
        <CopyrightText>
          <p>© Doc Sprocket Cycle Workshop {new Date().getFullYear()} &middot; </p>
          <p>Built with <a href="https://nextjs.org/">NextJS</a> by House of Sprocqué</p>
        </CopyrightText>
      </CopyrightContainer>
    </FooterContainer>
  )
}