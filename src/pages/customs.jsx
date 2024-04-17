import { fetchAPI } from "@/api/api";
import PageHeadingComponent from "@/components/PageHeadingComponent/PageHeadingComponent";
import { NextSeo } from "next-seo";
import CopyBox from "@/components/CopyBox/CopyBox";
import FadeBox from "@/components/layout/components/FadeBox";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { useState, useEffect } from "react";

export default function Customs({ customs, hero }) {
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
        title="Custom Built Bikes"
        description="Want something completely unique? Pick out one of our eye-catching vintage frames and tell us how you want it built. We'll handle the rest!"
        canonical="https://www.docsprocket.com.au/customs"
      />
      <PageHeadingComponent
        text="customs"
        imgSrc={hero.attributes.hero_img_lrg.data.attributes.url}
        imgAlt="image of Doc Sprocket workbench"
        imgThumbnail={
          hero.attributes.hero_img_lrg.data.attributes.formats.thumbnail.url
        }
      />
      <CopyBox>
        <p>
          We&apos;ve got a ton of frames and unbuilt bikes ready for you to make
          your own! Pick one out, tell us how you want it built and we will do
          the rest. Prices are subject to negotiation and will depend on the
          complexity of the build, the labour required, and the parts cost,
          however a basic custom build will start from about $1000. Please click
          on any of these bikes for more photos and information.
        </p>
      </CopyBox>
      <ProductGrid
        products={customs}
        custom={true}
      />
    </FadeBox>
  );
}

export async function getStaticProps() {
  const resCustoms = await fetchAPI(
    "/custom-bikes?populate=*",
    {},
    { cache: "force-cache" },
  );
  const resHero = await fetchAPI(
    "/customs-page?populate=*",
    {},
    { cache: "force-cache" },
  );
  return {
    props: {
      customs: resCustoms.data,
      hero: resHero.data,
    },
  };
}
