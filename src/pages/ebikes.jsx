import { fetchAPI } from "@/api/api";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

import Calendly from "@/components/Emu/EmuCalendar/Calendly";

import OuterContainer from "@/components/Emu/EmuLayout/OuterContainer";
import Hero from "@/components/Emu/EmuHero/Hero";
import AboutBoxVariant from "@/components/Emu/EmuAboutBox/aboutBoxVariant";
import Quote, { SpecsQuote } from "@/components/Emu/EmuQuote/Quote";
import ReviewsContainer from "@/components/Emu/EmuReviews/ReviewsContainer";
import EmuBody from "@/components/Emu/EmuBody/emuBody";
import Spacer from "@/components/Emu/EmuSpacer/Spacer";
import FadeBox from "@/components/layout/components/FadeBox";
import EmuSpecs from "@/components/Emu/EmuSpecs/EmuSpecs";

import emuLightweight from "@/img/features/emuLightweight.jpg";
import emuPeace from "@/img/features/emuPeace.jpg";
import EmuFooter from "@/components/Emu/EmuFooter/EmuFooter";
import EmuGallery from "@/components/Emu/EmuGallery/EmuGallery";

export default function Emu() {
  const [pageOpen, setPageOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    setPageOpen(true);
    return function cleanup() {
      setPageOpen(false);
    };
  }, []);

  function calendarToggle() {
    setShowCalendly((prevState) => !prevState);
    if (!showCalendly) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }

  return (
    <>
      <Calendly
        showCalendly={showCalendly}
        calendarToggle={calendarToggle}
      />
      <FadeBox showContent={pageOpen}>
        <NextSeo
          // title="The E-Mu E-Bike by Doc Sprocket"
          title="E-Bikes for Sale in Sydney | Best Affordable Electric Bike"
          // description="The E-Mu Urban E-Bike is your ideal workhorse commuter, weekend adventurer and errand-running machine. Test ride today!"
          description="Want to buy the best affordable electric bike in Sydney? Doc Sprocket have top E-bikes for sale. Visit our store today for the best electric bikes."
          canonical="https://www.docsprocket.com.au"
        />
        <Hero></Hero>
        <OuterContainer>
          <EmuFooter buttonPress={calendarToggle} />
          <Quote copy="Wherever life takes you - The E-Mu's got your back. It's a rugged daily commuter that can also haul a load of groceries or carry you away on your weekend adventures." />
          <AboutBoxVariant
            image={emuLightweight}
            priority={true}
            headline="Lightweight. Reliable. Fun."
            text={
              <>
                All the features you need -{" "}
                <b>
                  carrier rack, integrated lights, big battery and powerful
                  motor
                </b>{" "}
                - in a lightweight, stylish package. Enjoy{" "}
                <b>quality components</b> from established manufacturers such as
                Shimano, Tektro and Bafang, <b>safety features</b> such as brake
                cutoff sensors, and a variety of{" "}
                <b>adjustable riding positions</b> to fit all shapes and sizes.
              </>
            }
            reverse
          />
          <EmuBody />
          <AboutBoxVariant
            image={emuPeace}
            headline="Peace of mind."
            text={
              <>
                The E-Mu is fully assembled and finished at our Newtown
                workshop, and is backed by a comprehensive
                <b> two year warranty </b>
                and <b> two years free servicing</b>. It&apos;s designed to be
                <b> cheap and easy to repair and service</b>, and uses widely
                available, non-proprietary components. And if you have any
                issues, we are <b> just a phone call away!</b>
              </>
            }
          />
          {/* <EmuBody /> */}
          {/* <AboutBoxVariant
            image={test1}
            headline="My other car is an E-MU"
            text={
              <>
                With an <b>integrated cargo rack</b> and <b>powerful motor</b>,
                the E-Mu has what it takes to haul a week&apos;s worth of
                groceries or help with your weekend errands.
              </>
            }
            reverse
          /> */}
          <Spacer />
          <div
            id="testimonials"
            style={{ scrollMarginTop: "90px" }}
          />
          <Quote
            copy="Here's what some of our happy customers have to say about their E-Mu:"
            last
          />
          <ReviewsContainer />
          <SpecsQuote copy="TECH SPECS:" />
          <EmuSpecs />
          <Quote copy="GALLERY" />
          <EmuGallery />
        </OuterContainer>
      </FadeBox>
    </>
  );
}

// export async function getStaticProps() {
//   return
// }

export async function getStaticProps() {
  const res = await fetchAPI(
    "/workshop-page?populate=*",
    {},
    { cache: "force-cache" },
  );
  return {
    props: {
      images: res.data,
      emu: true,
    },
  };
}
