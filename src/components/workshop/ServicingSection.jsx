import styled from "styled-components";

const ServicingOptionsContainer = styled.div`
  font-family: ${props => props.theme.fonts.fontFamily}; 
  color: ${props => props.theme.fonts.fontColor};
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;
  }
`
const ServicingOption = styled.div`
  flex: 1 1 0px;
  border: 2px solid #00000022;
  border-radius: 10px;
  padding: 1em;
  filter: drop-shadow(2px 2px 4px #00000011);
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 2em;
    width: 460px;
  }
  @media (max-width: 480px) {
    width: 100%;
    padding: 1em;
  }
`
const ServiceHeading = styled.h4`
  font-size: 2em;
  margin: 0;
`
const ServiceSubtext = styled.p`
  line-height: 1.5;
  font-size: 1.8em;
  color: red;
  margin: 1em 0;
`
const ServiceUl = styled.ul`
  padding: 0;
  font-size: 1.8em;
  margin: 0;
`
const ServiceLi = styled.li`
  list-style-type: none;
  line-height: 1.5;

  &::before {
    content: "- ";
  }
`

export default function ServicingSection() {
  return (
    <ServicingOptionsContainer>
      <ServicingOption>
        <ServiceHeading>Basic Service - $100</ServiceHeading>
          <ServiceSubtext>
            for regularly serviced bikes needing a tune up
          </ServiceSubtext>
          <ServiceUl>
            <ServiceLi>wipe down frame and wheels</ServiceLi>
            <ServiceLi>tune brakes and gears</ServiceLi>
            <ServiceLi>degrease and lube drivetrain</ServiceLi>
            <ServiceLi>straighten derailleur hanger</ServiceLi>
            <ServiceLi>check and tighten bolts</ServiceLi>
            <ServiceLi>pump tyres</ServiceLi>
            <ServiceLi>test ride</ServiceLi>
          </ServiceUl>
      </ServicingOption>

      <ServicingOption>
        <ServiceHeading>Full Service $180</ServiceHeading>
          <ServiceSubtext>
            for most bikes - covers all bases
          </ServiceSubtext>
          <ServiceUl>
            <ServiceLi>basic service plus:</ServiceLi>
            <ServiceLi>thoroughly clean bike</ServiceLi>
            <ServiceLi>remove and degrease drivetrain</ServiceLi>
            <ServiceLi>true wheels</ServiceLi>
            <ServiceLi>service and repack bearings where required</ServiceLi>
            <ServiceLi>install new parts (excl. parts cost)</ServiceLi>
            <ServiceLi>bleed brakes where required</ServiceLi>
          </ServiceUl>
      </ServicingOption>

      <ServicingOption>
        <ServiceHeading>Overhaul / rebuild - $250</ServiceHeading>
          <ServiceSubtext>
          for vintage rebuilds, worn out bikes needing lots of work, or unusually complex bikes
          </ServiceSubtext>
          <ServiceUl>
            <ServiceLi>full service plus:</ServiceLi>
            <ServiceLi>completely disassemble bike</ServiceLi>
            <ServiceLi>extensive clean and detail</ServiceLi>
            <ServiceLi>clean and regrease all parts</ServiceLi>
            <ServiceLi>replace cables</ServiceLi>
          </ServiceUl>
      </ServicingOption>
    </ServicingOptionsContainer>
    
  )
}