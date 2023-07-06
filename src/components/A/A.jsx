import styled from "styled-components";

const A = styled.a`
  font-family: monospace;
  padding: 0 .1em;
  color: red;
  font-size: .9em;
  transition: .25s ease-in-out;
  &:hover {
    background-color: #000000;
    color: white;
  }
`

export default A;