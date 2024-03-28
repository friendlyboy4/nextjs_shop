import { fetchAPI } from "@/api/api";
import styled from "styled-components";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

import PageHeadingComponent from "@/components/PageHeadingComponent/PageHeadingComponent";
import ServicingSection from "@/components/workshop/ServicingSection";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import FadeBox from "@/components/layout/components/FadeBox";
import CopyBox from "@/components/CopyBox/CopyBox";
import A from "@/components/A/A";
import Anchor from "@/components/layout/components/Anchor";

const SectionHeading = styled.span`
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
  color: gold;
  border-bottom: 3px solid gold;
  background-color: #333333;
  clip-path: polygon(4% 0, 100% 0, 96% 100%, 0% 100%);
  padding: 0 0.4em 0 0.3em;
`;

const HR = styled.hr`
  border: 1px solid #00000022;
  width: 60%;
  margin: 5em auto;
`;

const RepairsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  @media (max-width: 480px) {
    flex-direction: column;
    width: fit-content;
  }
`;
const RepairsUl = styled.ul`
  padding-left: 0;
  margin: 0 auto;
  @media (max-width: 480px) {
    margin: 0;
  }
`;

const RepairsLi = styled.li`
  list-style-type: none;
  font-size: 2em;
  @media (max-width: 768px) {
    font-size: 1.9em;
  }
  &::before {
    content: "- ";
  }
`;

export default function Workshop({ images }) {
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    setPageOpen(true);
    return function cleanup() {
      setPageOpen(false);
    };
  }, []);
  return (
    <FadeBox showContent={pageOpen}>
      <NextSeo
        title="Workshop and Repairs"
        description="Got bike problems? We'll have you back in the saddle in no time. We provide servicing, repairs and more. Give your bike the care it deserves."
        canonical="https://www.docsprocket.com.au/workshop"
      />
      <PageHeadingComponent
        text="workshop"
        imgSrc={images.attributes.hero_img_lrg.data.attributes.url}
        imgAlt="image of Doc Sprocket workbench"
        imgThumbnail={
          images.attributes.hero_img_lrg.data.attributes.formats.thumbnail.url
        }
      />
      <CopyBox>
        Doc Sprocket is first and foremost a <b>mechanical workshop</b>. We
        pride ourselves on our mechanical expertise and the quality of our work.
        We recognise that many cyclists have a special connection to their
        bicycle, and with this in mind aim to treat your bike like our own. To
        book a service or repair, please call us on{" "}
        <A
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to call Doc Sprocket"
          href="tel: +61450519496"
        >
          0450 519 496
        </A>{" "}
        or email at{" "}
        <A
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to send an email to Doc Sprocket"
          href="mailto:info@docsprocket.com.au"
        >
          info@docsprocket.com.au
        </A>
      </CopyBox>

      <CopyBox>
        <Anchor id="servicing" />
        <SectionHeading>Servicing</SectionHeading> is offered at a few tiers
        depending on your bike&apos;s needs:
      </CopyBox>

      <ServicingSection />

      <CopyBox>
        Turnaround for servicing is typically no more than a few days if we hold
        all the parts needed for the job. Where parts must be ordered to
        complete your service, we will do our best to source these parts quickly
        and will keep you in the loop about timeframes.
      </CopyBox>

      <HR />

      <CopyBox>
        <Anchor id="repairs" />
        <SectionHeading>Repairs</SectionHeading> are performed on an as-required
        and per-job basis if your bike doesn&apos;t require broader servicing.
        Typically these jobs will be priced by negotiation, or at our workshop
        rate of $100/hour. We are game to solve (almost) <b>any</b> issues that
        you may have, however some more common jobs include:
      </CopyBox>
      <RepairsContainer>
        <RepairsUl>
          <RepairsLi>Repair flat tyre / replace tube</RepairsLi>
          <RepairsLi>Fit new brake or gear cables</RepairsLi>
          <RepairsLi>Brake / gear service</RepairsLi>
          <RepairsLi>Replace brake pads</RepairsLi>
          <RepairsLi>Bleed hydraulic brakes</RepairsLi>
        </RepairsUl>
        <RepairsUl>
          <RepairsLi>Replace spokes and true wheels</RepairsLi>
          <RepairsLi>Adjust cones / axles in wheels</RepairsLi>
          <RepairsLi>Service / repack headset</RepairsLi>
          <RepairsLi>Replace / service bottom bracket</RepairsLi>
          <RepairsLi>Rejoin / replace chain</RepairsLi>
        </RepairsUl>
      </RepairsContainer>

      <CopyBox>
        If you are looking for <b>electrical</b> repairs, we are always happy to
        take a look, but otherwise recommend{" "}
        <A
          target="_blank"
          rel="noreferrer"
          aria-label="Link to website of Glow Worm bike shop in Sydney"
          href="https://www.glowwormbicycles.com.au"
        >
          Glow Worm Bicycles
        </A>{" "}
        in Marrickville. Their friendly and experienced staff are very
        knowledgeable in all areas of electric bike servicing and repair. We
        will happily and confidently service road bikes, but for the really
        fancy stuff you could also contact{" "}
        <A
          target="_blank"
          rel="noreferrer"
          aria-label="Link to website of Vanilla Cycles bike shop in Sydney"
          href="https://vanillacycles.com"
        >
          Vanilla Cycles
        </A>{" "}
        in Marrickville. If you are looking to get wheels built from scratch, we
        recommend{" "}
        <A
          target="_blank"
          rel="noreferrer"
          aria-label="Link to website of Omafiets bike shop in Sydney"
          href="https://www.omafiets.com.au"
        >
          Omafiets
        </A>{" "}
        in Alexandria, who can also help with any matters related to cycle
        touring, rack mounts, frame bags and the like.
      </CopyBox>

      <HR />

      <CopyBox>
        <Anchor id="rebuilds" />
        <SectionHeading>Rebuilds</SectionHeading> of vintage bikes are a
        specialty of Doc Sprocket Cycle Workshop. We have the tools, parts and
        know-how to get your classic steel road bikes, 90s MTBs or obscure
        European tourers back on the road. These jobs can be highly variable in
        labour and parts cost so we typically charge per job after assessing the
        bike. Such jobs may involve just an in-depth service, all the way up to
        a complete strip, rebuild and detail. If you&apos;ve got a dusty old
        bike you can&apos;t bear to part with, get in touch and see if we can
        help return it to glory. Take a look at some of our past rebuilds
        below...
      </CopyBox>

      <ImageGallery images={images.attributes.workshop_img_gallery.data} />
    </FadeBox>
  );
}

export async function getStaticProps() {
  const res = await fetchAPI(
    "/workshop-page?populate=*",
    {},
    { cache: "force-cache" },
  );
  return {
    props: {
      images: res.data,
    },
  };
}
