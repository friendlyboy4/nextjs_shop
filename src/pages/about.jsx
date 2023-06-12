import styled from "styled-components";
import FadeBox from "@/components/layout/components/FadeBox";
import { useState, useEffect } from "react";

export default function About() {
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    setPageOpen(true)
    return function cleanup() {
      setPageOpen(false)
    }
  }, [])
  return (
    <FadeBox showContent={pageOpen}>
      <h1>This is the about page</h1>
    </FadeBox>
  )
}