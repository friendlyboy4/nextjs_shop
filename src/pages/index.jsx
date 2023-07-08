'use client'

import { fetchAPI } from "@/api/api";
import Hero from "@/components/frontPage/hero/Hero";
import BannerContainer from '@/components/frontPage/banner/BannerContainer';
import SectionHeading from '@/components/frontPage/sectionHeading/SectionHeading';
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { useState, useEffect } from "react";
import FadeBox from "@/components/layout/components/FadeBox";
import { NextSeo } from "next-seo";

export default function Home({ bikes, customs, hero, ebikeBanner, workshopBanner }) {
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
        title='Classy second-hand, vintage and custom bikes'
        description='Quality pre-loved bicycles, expert mechanical work and honest advice'
      />
      <Hero 
        images={hero}
      />
      <SectionHeading 
        text='OUR BIKES'
        href='/bikes'
      />
      <ProductGrid
        products={bikes}
        frontpage={+true}
      />
      <BannerContainer
        banner1={ebikeBanner}
        banner2={workshopBanner}
      />
      <SectionHeading 
        text='CUSTOMS'
        href='/customs'
      />
      <ProductGrid
        products={customs}
        frontpage={+true}
        custom={true}
      />
    </FadeBox>
  )
}

export async function getStaticProps() {
  const resBikes = await fetchAPI("/used-bikes?populate=*", {}, {cache: 'force-cache'})
  const resCustoms = await fetchAPI("/custom-bikes?populate=*", {}, {cache: 'force-cache'})
  const resHero = await fetchAPI("/frontpage-gallery?populate=deep", {}, {cache: 'force-cache'})
  const resEbikeBanner = await fetchAPI("/ebikes-banner?populate=*", {}, {cache: 'force-cache'})
  const resWorkshopBanner = await fetchAPI("/workshop-banner?populate=*", {}, {cache: 'force-cache'})
  return {
    props: {
      bikes: resBikes.data,
      customs: resCustoms.data,
      hero: resHero.data,
      ebikeBanner: resEbikeBanner.data,
      workshopBanner: resWorkshopBanner.data,
    },
  }
}