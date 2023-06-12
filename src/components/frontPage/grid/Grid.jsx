import styled from "styled-components";
import GalleryCard from "@/components/frontPage/grid/GalleryCard";

const Container = styled.div`
  width: 80vw;
  /* height: 40vw; */
  margin: 10rem auto;
  display: grid;
  grid-template-columns: 24.5vw 24.5vw 24.5vw;
  grid-template-rows: 29.4vw 29.4vw;
  grid-gap: 4rem 0;
  /* justify-items: center; */
  justify-content: space-between;
  /* border: 1px solid blue; */
`

const Item = styled.div`
  background-color: #dddddd;
  border: 1px solid black;
  text-align: center;
  /* width: 5vw;
  height: 3vw; */
  width: 100%;
  height: 100%;
  position: relative;
  /* padding: 2rem;
  margin: 2rem; */
`

// const ImageStyled = styled(Image)`
//   /* width: 5vw;
//   height: 3vw; */
// `

export default function Grid({ bikes }) {
  return (
    <>
      <Container>
          {
            bikes.map((bike) => (
              
              <GalleryCard 
                image={bike.attributes.image}
              />
            ))
          }
      </Container>
    </>
  )
}