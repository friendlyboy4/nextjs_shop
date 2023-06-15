import { fetchAPI } from "@/api/api";
import GalleryComponent from "@/components/GalleryComponent/GalleryComponent";
import { NextSeo } from "next-seo";

const Bike = ({ bike }) => {
  return (
    <>
      <NextSeo 
        title={`${bike.attributes.title}`}
        description={bike.attributes.precis}
        canonical={`https://www.docsprocket.com.au/bikes/${bike.attributes.slug}`}
      />
      <GalleryComponent 
        product={bike}
      />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetchAPI(`/used-bikes`);

  const paths = res.data.map((bike) => ({
    params: { slug: bike.attributes.slug},
  }))

  return { paths, fallback: false};
}

export async function getStaticProps({ params }) {
  const res = await fetchAPI(`/used-bike/${params.slug}?populate[images][populate]=*`, {}, {cache: 'force-cache'})
  return {
    props: {
      bike: res.data
    },
    // cache: 'force-cache',
  }
}

export default Bike