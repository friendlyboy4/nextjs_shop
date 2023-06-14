import styled from "styled-components";
import FadeBox from "@/components/layout/components/FadeBox";
import CopyBox from "@/components/CopyBox/CopyBox";
import { useState, useEffect } from "react";

export default function About() {
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    setPageOpen(true)
    return function cleanup() {
      setPageOpen(false)
    }
  }, [])
  // /new_site/nextjs_shop
  return (
    <FadeBox showContent={pageOpen}>
      <NextSeo 
        title="About Doc Sprocket"
        description="Doc Sprocket was started in 2021. It's gone well so far."   
      />
      <CopyBox>
        Hi, my name is Joel. I opened Doc Sprocket Cycle Workshop in 2021 after doing the rounds in various Sydney shops. 
      </CopyBox>  
    </FadeBox>
  )
}