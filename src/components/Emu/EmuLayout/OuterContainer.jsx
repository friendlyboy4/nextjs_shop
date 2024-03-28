import styled from "styled-components";

const OuterContainerStyled = styled.div`
  position: relative;
  top: -${(props) => props.theme.layout.headerHeight};
  width: 100%;
`;

export default function OuterContainer({ children }) {
  return <OuterContainerStyled>{children}</OuterContainerStyled>;
}
