import React from "react";
import Navbar from "../Navbar";
import Video from "../../video/video.mp4";
import { HeroContainer, VideoBg, HeroBg } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
    </HeroContainer>
  );
};

export default Hero;
