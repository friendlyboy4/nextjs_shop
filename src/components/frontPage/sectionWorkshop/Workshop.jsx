import styled from "styled-components"
import Banner from "../banner/Banner"
import workshopImg from "@/assets/banners/workshop.webp";

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti error sunt accusamus excepturi deserunt cupiditate neque quisquam similique"

export default function WorkshopSection() {
  return (
    <Banner 
      sectionHref="/workshop"
      sectionHeading="workshop"
      bannerImg={workshopImg}
      bannerImgAlt="photo of our workshop"
      sectionCopy={lorem}
    />
  )
}