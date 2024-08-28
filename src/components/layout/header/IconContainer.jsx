import styled from "styled-components";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.headerFontColor};
  text-decoration: none;
`;

const IconContainerStyled = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-top: 0.75rem;
    font-size: 1.5rem;
    width: 100%;
    flex-direction: column;
    > * {
      padding: 0.75rem 0 0.75rem;
      width: fit-content;
    }
  }
`;

const FBIcon = styled(FaFacebookSquare)`
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.headerFontColor};
  border-radius: 12px;
  font-size: 2.8em;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    color: #444444;
    margin: 0 3rem 0 -0.2rem;
  }
  :hover {
    color: #bbbbbb;
  }
`;

const InstaIcon = styled(FaInstagram)`
  margin-right: 0.5rem;
  color: ${(props) => props.theme.colors.headerFontColor};
  font-size: 2.8em;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    color: #444444;
    margin: 0 3rem 0 -0.2rem;
  }
  :hover {
    color: #bbbbbb;
  }
`;


export default function IconContainer() {
  return (
    <IconContainerStyled>
      <LinkStyled
        rel="nofollow noopener noreferrer"
        target="_blank"
        aria-label="Link to Doc Sprocket Instagram page"
        href="https://www.instagram.com/docsprocketnewtown/"
      >
        <InstaIcon />
      </LinkStyled>

      <LinkStyled
        rel="nofollow noopener noreferrer"
        target="_blank"
        aria-label="Link to Doc Sprocket Facebook page"
        href="https://www.facebook.com/docsprocketnewtown/"
      >
        <FBIcon />
      </LinkStyled>
    </IconContainerStyled>
  )
}