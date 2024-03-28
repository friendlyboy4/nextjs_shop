import styled from "styled-components";
import GridItem from "./GridItem";

const GridContainer = styled.div`
  font-size: 1rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  column-gap: 2em;
  row-gap: 2em;
  margin: 3rem 0 4rem;
  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    margin: 2rem 0 3rem;
    ${(props) =>
      props.frontpage
        ? "grid-template-columns: repeat(1, 1fr);"
        : "grid-template-columns: repeat(2, 1fr);"}
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 3em;
  }
`;

export function ProductGrid({ products, frontpage, custom }) {
  const sliceValue = frontpage ? [0, 3] : "";
  return (
    <GridContainer frontpage={frontpage}>
      {products.slice(...sliceValue).map((product) => (
        <GridItem
          key={product.id}
          bike={product.attributes}
          frontpage={frontpage}
          custom={custom}
        />
      ))}
    </GridContainer>
  );
}
