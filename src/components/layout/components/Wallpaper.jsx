import styled from 'styled-components';
import wallpaper from '@/assets/util/bike-wallpaper-vector.svg'

const WallpaperStyled = styled.div`
  position: relative;
  z-index: 997;
  height: 100%;
  width: 100%;
  background-image: url(${wallpaper});
  background-size: 50%;
  background-attachment: fixed;
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
`
// Wall is white background to prevent lower layers from coming through wallpaper
const Wall = styled.div`
  position: relative;
  z-index: 997;
  height: 100%;
  width: 100%;
  background-color: white;
`


export default function Wallpaper({ children }) {
  return (
    // <Wall>
      <WallpaperStyled>
        { children }
      </WallpaperStyled>
    // </Wall> 
  )
}