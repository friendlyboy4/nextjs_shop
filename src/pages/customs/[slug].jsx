import { fetchAPI } from "@/api/api";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import { NextSeo } from "next-seo";

const Custom = ({ custom }) => {
  return (
    <>
      <NextSeo 
        title={`${custom.attributes.title}`}
        description={custom.attributes.precis}
        canonical={`https://www.docsprocket.com.au/customs/${custom.attributes.slug}`}
      />
      <GalleryComponent 
        product={custom}
        custom
      />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetchAPI(`/custom-bikes`);

  const paths = res.data.map((custom) => ({
    params: { slug: custom.attributes.slug},
  }))

  return { paths, fallback: false};
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI(`/custom-bike/${params.slug}?populate[images][populate]=*`, {}, {cache: 'force-cache'})
  return {
    props: {
      custom: res.data
    },
    // cache: 'force-cache',
  }
}

export default Custom