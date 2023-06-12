import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import PageHeadingComponent from "@/components/PageHeadingComponent/PageHeadingComponent";
import { fetchAPI } from "@/api/api";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import CopyBox from "@/components/CopyBox/CopyBox";
import { useState, useEffect } from "react";

import { NextSeo } from "next-seo";
import FadeBox from "@/components/layout/components/FadeBox";

export default function Bikes({ bikes, hero }) {
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
        title="Bikes 4 sale"
        description="Browse our catalogue of second-hand and vintage bikes for sale. All bikes come fully serviced with a satisfaction guarantee."   
      />
      <PageHeadingComponent 
        text="bikes"
        imgSrc={hero.attributes.hero_img_lrg.data.attributes.url}
        imgAlt="banner image for bikes page"
      />
      <CopyBox>
        <p>
          At Doc Sprocket, we love bringing old bikes back to life and finding them new homes. 
          Our bikes are typically rebuilt with many new parts including <b>chain, cassette, cables, brake pads, tyres</b> and <b>tubes </b>
          so that they look great and run like new. Most will also be extensively <b>stripped, 
          cleaned, degreased, regreased, </b>and<b> rebuilt</b> from scratch to ensure they adhere to our rigorous standards. 
          Please click on any of these bikes for more photos and information. 
          If you would like to buy one or take a test ride, swing by the shop or get in touch by phone or email!
        </p>
      </CopyBox>

      
      <ProductGrid 
        products={bikes}
      />
    </FadeBox>
  )
}

export async function getStaticProps() {
  const resBikes = await fetchAPI("/used-bikes?populate=*")
  const resHero = await fetchAPI("/bikes-page?populate=*")
  return {
    props: {
      bikes: resBikes.data,
      hero: resHero.data,
    },
    revalidate: 1,
  }
}