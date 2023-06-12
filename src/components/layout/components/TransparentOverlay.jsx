import styled from "styled-components";

const TransOverlay = styled.div`
  width: 100%;
  top: 6rem;
  background-color: #ffffff;
  opacity: 1;
  transition: opacity .5s ease;
  z-index: 0;
  ${props => props.visible ? 'z-index: 95; opacity: .2; pointer-events: initial !important;': ''}
`

export default function TransparentOverlay({ visible, children, navbarClose }) {
  return (
    <TransOverlay 
      visible={visible}
      onClick={navbarClose}
    >
      {children}
    </TransOverlay>
  )
}