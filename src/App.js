import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/hero.component";
import ProductCard from "./components/Products/product-card.component";
import {
  coffeeData,
  sandwichData,
  specialsData,
} from "./components/Products/data";
import Feature from "./components/Feature/feature.component";
import Footer from "./components/Footer/footer.component";
import VideoBanner from "./components/BannerSection/VideoBanner/video.component";
import Gallery from "./components/Gallery/gallery.component";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <ProductCard heading="Choose Your Favorite Drink" data={coffeeData} />
      <Feature />
      <ProductCard
        heading="Good Sandwich For Good Moments"
        data={sandwichData}
      />
      <VideoBanner />
      <ProductCard heading="Try Out These Specials" data={specialsData} />
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;
