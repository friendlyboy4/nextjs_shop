import styled from 'styled-components';

const TopperStyled = styled.div`
  background-color: #2a2e32;
  width: 100%;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopperText = styled.p`
  color: #ECB053;
  font-size: 1.4rem;
  font-family: arial, sans-serif;
  margin: 0 auto;
`

export default function Topper() {
  return (
    <TopperStyled>
      <TopperText>Why did the chicken cross the road? | I don't know</TopperText>
    </TopperStyled>
  )
}