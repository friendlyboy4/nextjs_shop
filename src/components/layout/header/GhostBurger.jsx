import styled from "styled-components"

const GhostBurgerBox = styled.div`
  display: none;
  width: 2.4rem;
  height: 2.4rem;
  @media (max-width: 768px) {
    display: block;
  }
`

export default function GhostBurger() {
  return (
    <GhostBurgerBox />
  )
}