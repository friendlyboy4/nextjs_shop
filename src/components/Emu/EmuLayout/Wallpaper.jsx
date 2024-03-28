import styled from "styled-components";
import wallpaper from "@/img/utils/bike-wallpaper-vector.svg";

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url(${wallpaper.src});
  background-attachment: fixed;
  background-size: 60%;
  @media (max-width: 1200px) {
    background-size: 70%;
  }
  @media (max-width: 768px) {
    background-size: 80%;
  }
  @media (max-width: 480px) {
    background-size: 90%;
  }
`;

export default function Wallpaper({ children, closeNavMenu, showContent }) {
  return (
    <Backdrop
      onClick={closeNavMenu}
      showContent={showContent}
    >
      {children}
    </Backdrop>
  );
}
