import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #181818;
  padding: 0 3rem;
  border-bottom: 1px solid #eeeeee;
`
const NavContainer = styled.div`

`
const NavList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li`
  color: #d4af37;
  padding: 1rem;
  list-style-type: none;
  font-family: arial, sans-serif;
  
  /* margin: 0; */
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const IconItem = styled.div`
  width: 2rem; 
  height: 2rem;
  /* background-color: green; */
  border: 3px solid black;
  margin: 0 .5rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default function UpperHeader() {
  return (
    <Container>
      <NavContainer>
        <NavList>
          <StyledLink href="/about"><NavItem>About</NavItem></StyledLink>
          <StyledLink href="/contact"><NavItem>Contact</NavItem></StyledLink>
        </NavList>
      </NavContainer>
      <IconContainer>
        <IconItem />
        <IconItem />
        <IconItem />
      </IconContainer>
    </Container>
  )
}