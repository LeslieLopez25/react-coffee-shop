import React from "react";
import { FeatureContainer, FeatureButton } from "./feature.styles";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Special of the Day</h1>
      <p>Delicious freshly made apple pie from our shop.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
