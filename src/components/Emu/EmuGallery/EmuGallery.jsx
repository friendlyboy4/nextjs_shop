import styled from "styled-components";

import Image from "next/image";

import blueDisc from "@/img/studio/blueDisc.jpg";
import blueKey from "@/img/studio/blueKey.jpg";
import blueLight from "@/img/studio/blueLight.jpg";
import orangeDrivetrain from "@/img/studio/orangeDrivetrain.jpg";
import orangeRack from "@/img/studio/orangeRack.jpg";
import orangeStem from "@/img/studio/orangeStem.jpg";
import orangeMain from "@/img/studio/emuOrangeMain.jpg";
import blueMain from "@/img/studio/emuBlueMain.jpg";

const GalleryContainer = styled.div`
  width: 100%;
  padding-bottom: 8rem;
  @media (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

const GalleryGrid = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3vw;
  padding: 0 20px;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid #00000022;
  filter: drop-shadow(3px 6px px #00000022) drop-shadow(8px 16px 8px #00000022);
  background-color: #cccccc;
  aspect-ratio: 5/3;
  transition: 0.4s;
  cursor: pointer;
  /* &:hover {
    border: 1px solid #00000066;
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 3px #33333344;
  } */
`;

const GalleryImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

export default function EmuGallery() {
  return (
    <>
      <GalleryContainer>
        <GalleryGrid>
          <GalleryItem>
            <GalleryImage
              src={blueKey}
              alt="emu key"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={orangeDrivetrain}
              alt="emu drivetrain"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={blueLight}
              alt="emu light"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={orangeRack}
              alt="emu rack"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={blueDisc}
              alt="emu disc"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={orangeStem}
              alt="emu stem"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={blueMain}
              alt="emu blue"
              fill
            />
          </GalleryItem>
          <GalleryItem>
            <GalleryImage
              src={orangeMain}
              alt="emu orange"
              fill
            />
          </GalleryItem>
        </GalleryGrid>
      </GalleryContainer>
    </>
  );
}
