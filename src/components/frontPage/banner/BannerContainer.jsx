import styled from "styled-components";
import BannerItem from "./BannerItem";

const BannerContainerStyled = styled.div`
  width: 100%;
  display: flex;
  margin: 10em auto;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`

export default function BannerContainer({banner1, banner2}) {
  return (
    <BannerContainerStyled>
      <BannerItem 
        image={banner1.attributes.banner_image.data.attributes.url}
        imageAlt="image of a blue ebike in a forest"
        linkTo={banner1.attributes.banner_href}
        sectionHeading={banner1.attributes.banner_title}
        text={banner1.attributes.banner_copy}
      />
      <BannerItem 
        image={banner2.attributes.banner_image.data.attributes.url}
        imageAlt="image of a workshop space with park tools"
        linkTo={banner2.attributes.banner_href}
        sectionHeading={banner2.attributes.banner_title}
        text={banner2.attributes.banner_copy}
      />
    </BannerContainerStyled>
  )
}