import styled from "styled-components";
import Image from "next/image";
import EmuIcon from "@/img/emu_body.svg";

const EmuContainer = styled.div`
  position: relative;
  height: 8rem;
  margin: 8rem 0;
`;

export default function EmuBody() {
  return (
    <EmuContainer>
      <Image
        src={EmuIcon}
        alt="Official Logo for the E-Mu Electric Bike"
        fill
      />
    </EmuContainer>
  );
}
