import { fetchAPI } from "@/api/api";
import styled from "styled-components";
import CopyBox from "@/components/CopyBox/CopyBox";
import FadeBox from "@/components/layout/components/FadeBox";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import A from "@/components/A/A";
import { NextSeo } from "next-seo";

import { useState, useEffect } from "react";

import PageHeadingComponent from "@/components/PageHeadingComponent/PageHeadingComponent";

export default function Ebikes({ images }) {
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    setPageOpen(true)
    return function cleanup() {
      setPageOpen(false)
    }
  }, [])
  return (
    <FadeBox
      showContent={pageOpen}
    >
      <NextSeo 
        title="The E-Mu electric bike - Made for Sydney"
        description="Check out the E-Mu urban commuter. Made just for you"
      />
      <PageHeadingComponent 
        text='e&#x2011;bikes'
        imgSrc={images.attributes.hero_img_lrg.data.attributes.url}
        imgAlt='image of E-Mu ebike'
        imgThumbnail={images.attributes.hero_img_lrg.data.attributes.formats.thumbnail.url}
      />
      <CopyBox>
        <p>
          The E-Mu electric bike is now available exclusively at Doc Sprocket Cycle Workshop. 
          We have drawn upon our substantial experience with servicing and selling electric bikes 
          to create the ideal e-bike for commuting and recreation in Sydney. As such, the E-Mu prioritises safety, 
          reliability and functionality while also maintaining a fair price point. 
          <br/><br/>
          The E-Mu is specially designed to ensure easy and affordable servicing and repair. 
          It uses mainstream, non-proprietary technology rather than closed systems such as that found on many other brands. 
          For peace of mind, the E-Mu comes standard with two years of free servicing, 
          as well as a two year warranty on mechnical and electrical parts. 
          <br/><br/>
          To learn more, please get in touch or visit the dedicated <A target="_blank" rel="noreferrer" aria-label="Read more about the E-Mu electric bike here" href="https://e-mu.au">website for the E-Mu</A> where 
          you can find more information and images, or book yourself a test ride. 
        </p>
      </CopyBox>
      {
        images.attributes.ebikes_img_gallery.data && (
          <ImageGallery 
            images={images.attributes.ebikes_img_gallery.data}
          />
        )
      }
    </FadeBox>
  )
}

export async function getStaticProps() {
  const res = await fetchAPI("/ebikes-page?populate=*", {}, {cache: 'force-cache'})
  return {
    props: {
      images: res.data,
    },  
  }
}
