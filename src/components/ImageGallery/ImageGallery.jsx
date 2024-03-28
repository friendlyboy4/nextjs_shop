import Image from "next/image";
import styled from "styled-components";

const GalleryContainer = styled.div`
  width: 100%;
`;

const GalleryItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  margin: 2em auto;
  border-radius: 10px;
  filter: ${(props) => props.theme.effects.dropShadow};
`;

export default function ImageGallery({ images }) {
  return (
    <GalleryContainer>
      {images.map((image) => (
        <GalleryItem key={image.id}>
          <Image
            src={image.attributes.url}
            alt="image from image gallery"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${image.attributes.url}&w=16&q=1`}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </GalleryItem>
      ))}
    </GalleryContainer>
  );
}
