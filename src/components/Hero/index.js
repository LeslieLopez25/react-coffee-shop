import React from "react";
import Navbar from "../Navbar";
import Video from "../../video/video.mp4";
import {
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
    </HeroContainer>
  );
};

export default Hero;
