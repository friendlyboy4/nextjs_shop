import styled from "styled-components";
import GallerySection from "./GallerySection";
import TextSection from "./TextSection";
import DataSection from "./DataSection";
import Link from "next/link";

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const BackButton = styled(Link)`
  width: fit-content;
  padding: 0.4rem 1rem;
  box-shadow: 2px 2px black;
  border: 1px solid black;
  font-size: 2em;
  font-weight: 500;
  color: inherit;
  background-color: #ffe500;
  transition: 0.1s ease;
  &:active {
    transform: translate(1px, 1px);
    box-shadow: 0 0;
  }
`;

export default function GalleryComponent({ product, custom }) {
  return (
    <PageContainer>
      <GallerySection
        images={product.attributes.images.data}
        alt={product.attributes.title}
      />
      <InfoContainer>
        <TextSection
          data={product.attributes}
          custom={custom}
        />
        {custom ? (
          <>
            <DataSection data={product.attributes} />
            <BackButton href="/customs">Back to customs &#8594;</BackButton>
          </>
        ) : (
          <BackButton href="/bikes">Back to bikes for sale &#8594;</BackButton>
        )}
      </InfoContainer>
    </PageContainer>
  );
}
