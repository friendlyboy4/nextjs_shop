import * as React from "react";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";

const CalendarModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffffdd;
  position: fixed;
  top: 0;
  z-index: 99998;
`;

const CloseButton = styled.button`
  font-family: sans-serif;
  position: fixed;
  line-height: 1;
  top: 12px;
  right: 15px;
  font-size: 3.2rem;
  font-weight: bold;
  z-index: 99999;
  outline: none;
  background-color: #ffffffdd;
  border: 2px solid black;
  border-radius: 12px;
  padding: 1rem 1.4rem;
  cursor: pointer;
  box-shadow: 2px 2px 1px #00000044;
  @media (max-width: 768px) {
    font-size: 2.4rem;
    padding: 0.6rem 1rem;
    font-weight: 400;
    border-radius: 8px;
  }
`;

function CalendarWidget() {
  return (
    <>
      <InlineWidget
        url="https://calendly.com/e-mu/test-ride-an-e-mu-electric-bike?hide_gdpr_banner=1"
        styles={{
          boxSizing: "border-box",
          // marginTop: `${width > 768 ? '8rem' : '6rem'}`,
          // marginTop: "2rem",
          height: "100%",
          // paddingBottom: "2rem",
        }}
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
}

export default function Calendly({ showCalendly, calendarToggle, width }) {
  return (
    <>
      {showCalendly && (
        <CalendarModal onClick={calendarToggle}>
          <CloseButton
          // onClick={calendarToggle}
          >
            X
          </CloseButton>
          <CalendarWidget width={width} />
        </CalendarModal>
      )}
    </>
  );
}
