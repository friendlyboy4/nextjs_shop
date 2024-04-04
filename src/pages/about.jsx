import FadeBox from "@/components/layout/components/FadeBox";
import CopyBox from "@/components/CopyBox/CopyBox";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";
import PageHeadingComponent from "@/components/PageHeadingComponent/PageHeadingComponent";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { fetchAPI } from "@/api/api";
import A from "@/components/A/A";

export default function About({ images }) {
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
        title="About Us"
        description="Doc Sprocket opened in 2021 in an old tea shop on South King Street. If you want to know more you'll have to visit our website."
        canonical="https://www.docsprocket.com.au/about"
      />
      <PageHeadingComponent
        text="about"
        imgSrc={images.attributes.hero_img_lrg.data.attributes.url}
        imgAlt="image of a bike built at Doc Sprocket Cycle Workshop"
        imgThumbnail={
          images.attributes.hero_img_lrg.data.attributes.formats.thumbnail.url
        }
      />
      <CopyBox>
        Hiya my name is Joel. I opened Doc Sprocket Cycle Workshop in 2021 after
        working at a number of cycle shops and businesses across Sydney. I
        wanted to create a &apos;workshop-style&apos; space with an emphasis on
        mechanical work and beautiful old bikes, rather than just another shiny
        retail outlet stocking the same old products. Unlike most other bike
        shops, I also wanted to sell, refurbish and rebuild second-hand bikes.
      </CopyBox>
      <CopyBox>
        Since opening our doors, Doc Sprocket has served many happy customers
        and a few grumpy ones. We&apos;ve fixed hundreds, or maybe thousands of
        bikes. Some of them were nice, some were bad, and some were just ok.
        We&apos;ve also built and sold tons of pre-loved and refurbished bikes,
        and more recently have begun to build vintage custom bikes to order. In
        2022 we began selling our own brand of electric bike, The E-Mu, designed
        for commuting in Sydney&apos;s harsh urban environs. You can learn more
        about that{" "}
        <A
          // target="_blank"
          rel="noreferrer"
          aria-label="Read more about the E-Mu electric bike here"
          href="/ebikes"
        >
          here
        </A>
        .
      </CopyBox>
      <CopyBox>
        We are passionate about cycling, and wish to share this passion with the
        local community. We believe that cycling can be deeply empowering for
        the individual, and transformative for local neighbourhoods, suburbs and
        cities. Going forward, we would like to strengthen our links with the
        local community through events and workshops. In particular, we would
        love to offer workshops in cycle servicing and repair to empower and
        build resilience within the local cycling community. If this would
        interest you please get in touch. Meanwhile enjoy some photos from our
        past few years...
      </CopyBox>

      {images.attributes.about_img_gallery.data && (
        <ImageGallery images={images.attributes.about_img_gallery.data} />
      )}
    </FadeBox>
  );
}

export async function getStaticProps() {
  const res = await fetchAPI(
    "/about-page?populate=*",
    {},
    { cache: "force-cache" },
  );
  return {
    props: {
      images: res.data,
    },
  };
}
