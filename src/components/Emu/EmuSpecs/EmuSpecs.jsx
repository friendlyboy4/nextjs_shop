import React from "react";
import styled from "styled-components";

const specs = [
  { specVar: "Frame", specValue: "Welded Aluminium Step-Through" },
  { specVar: "Forks", specValue: "Zoom Suspension Forks" },
  {
    specVar: "Battery",
    specValue: "17.5Ah 48V (824Wh), Panasonic Cells",
  },
  { specVar: "Motor", specValue: "Bafang 250w Rear Hub Motor" },
  { specVar: "Display", specValue: "Bafang 500C LCD Colour Display" },
  { specVar: "Gears", specValue: "7-speed Shimano Acera" },
  // { specVar: "Derailleur", specValue: "Shimano Acera" },
  // { specVar: "Gear Shifter", specValue: "Shimano Acera" },
  { specVar: "Chainset", specValue: "Prowheel alloy w. 44T chainring" },
  {
    specVar: "Brakes",
    specValue: "Tektro HD-E350 Hydraulic Brakes w. motor cutoffs",
  },
  // {
  //   specVar: "Brake Rotors",
  //   specValue: "Tektro 6-bolt 160mm front and rear",
  // },
  { specVar: "Wheels", specValue: '26" alloy wheels + heavy gauge spokes' },
  // { specVar: "Rims", specValue: '36-spoke 26" alloy rims' },
  // { specVar: "Hubs", specValue: "Modus loose-ball alloy hubs" },
  // { specVar: "Spokes", specValue: "13-gauge stainless steel" },
  { specVar: "Tyres", specValue: 'Schwalbe Marathon Plus 26" x 1.75' },
  { specVar: "Handlebars", specValue: "Promax alloy trekking bars" },
  { specVar: "Stem", specValue: "Promax alloy adjustable a-head stem" },
  // { specVar: "Headset", specValue: 'Neco 1 1/8" threadless headset' },
  { specVar: "Lights", specValue: "Blaze-light integrated lights" },
  {
    specVar: "Rack",
    specValue: "Alloy frame-mounted rear rack (15kg capacity)",
  },
  { specVar: "Pedals", specValue: "Wellgo flat pedals" },
  // { specVar: "Grips", specValue: "Ergo lock-on grips" },
  // { specVar: "Seatpost", specValue: "Alloy 26.4mm seatpost" },
  { specVar: "Saddle", specValue: "Wide comfort saddle" },
];

const SpecsWrapper = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  color: #333333;
`;

const SpecsContainer = styled.div`
  display: grid;
  grid-template-columns: fit-content(30%) 1fr;
  margin: 0 auto;
  width: fit-content;
`;

// const SpecsContainer = styled.div`
//   display: flex;
//   margin: 0 auto;
//   width: fit-content;
// `;

const SpecCell = styled.div`
  border: 1px solid #00000022;
  padding: 1rem 1rem 1rem 0.5rem;
  background-color: #ffffff88;
  font-size: 1.6rem;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SpecColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function EmuSpecs() {
  return (
    <SpecsWrapper>
      <SpecsContainer>
        {/* <SpecColumn> */}
        {specs.map((spec) => (
          <React.Fragment key={`${spec.specVar}Var`}>
            <SpecCell style={{ fontWeight: "bold" }}>{spec.specVar}: </SpecCell>
            <SpecCell>{spec.specValue}</SpecCell>
          </React.Fragment>
        ))}
        {/* </SpecColumn> */}
        {/* <SpecColumn> */}
        {/* {specs.map((spec) => (
          <SpecCell key={spec.specVar}>{spec.specValue}</SpecCell>
        ))} */}
        {/* </SpecColumn> */}
      </SpecsContainer>
    </SpecsWrapper>
  );
}
