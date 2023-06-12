import styled from "styled-components";
import GalleryCard from "@/components/frontPage/grid/GalleryCard";
import GalleryCardNew from "./GalleryCardNew";

const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2%;
  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 2rem;
  }

`

export default function FlexGallery({ bikes }) {
  return (
    <GalleryContainer>
      {
        bikes.slice(0,3).map((bike) => {
          return (
            <GalleryCardNew
              key={bike.id}
              slug={bike.attributes.slug}
              title={bike.attributes.title}
              price={bike.attributes.price}
              image={bike.attributes.images.data[0].attributes.formats.small.url}
            />
          )
        }
          
        )
      }
    </GalleryContainer>
  )
}