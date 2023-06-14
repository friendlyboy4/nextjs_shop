import styled from "styled-components";
import Link from "next/link";
import { 
  FaInstagram,
  FaFacebookSquare
} from 'react-icons/fa';

const HeaderRightContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  @media (max-width: 768px) {
    flex-direction: column; 
    margin-top: 2rem;
    justify-content: flex-start;
  }
`

const IconContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    width: 100%;
    flex-direction: column;
    >* {
      margin-bottom: 1.5rem;
    }    
  }
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    width: 100%; 
    justify-content: space-between;
  }
`

const TextItem = styled.div`
  padding: 0 2em 0 0;
  font-size: 2.2em;
  color: ${props => props.theme.colors.headerFontColor};
  transition: color 0.3s ease;
  @media (max-width: 1000px) and (min-width: 768px) {
    font-size: 2em; 
  }
  @media (max-width: 768px) {
    padding: 0 4rem 0 0;
    padding-bottom: 2rem;
  }
  :hover {
    color: goldenrod;
  }
`

const LinkStyled = styled(Link)`
  color: ${props => props.theme.colors.headerFontColor};
  text-decoration: none;
`

const FBIcon = styled(FaFacebookSquare)`
  /* margin: 1.65rem 1.65rem 0 -.2rem; */
  color: ${props => props.theme.colors.headerFontColor};
  border-radius: 12px;
  font-size: 2.8em;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    color: #444444; 
  }
  :hover {
    color: #bbbbbb;
  }
`

const InstaIcon = styled(FaInstagram)`
  margin-right: 1rem;
  color: ${props => props.theme.colors.headerFontColor};
  font-size: 2.8em;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    color: #444444; 
  }
  :hover {
    color: #bbbbbb;
  }
`

export default function NavRight({ navbarClose }) {
  return (
    <HeaderRightContainer>
      <TextContainer>
        <LinkStyled 
          href="/about"
          onClick={navbarClose}
        >
          <TextItem>
            About
          </TextItem>
        </LinkStyled>
        <LinkStyled 
          href="#contact"
          onClick={navbarClose}
        >
          <TextItem>
            Contact
          </TextItem>
        </LinkStyled>
      </TextContainer>
      <IconContainer>

        <LinkStyled rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/docsprocketnewtown/">
          <InstaIcon />
        </LinkStyled>

        <LinkStyled rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/docsprocketnewtown/">
          <FBIcon />
        </LinkStyled>

      </IconContainer>
    </HeaderRightContainer>
  )
}