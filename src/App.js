import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/hero.component";
import ProductCard from "./components/Products/product-card.component";
import {
  coffeeData,
  dessertData,
  sandwichData,
  soupData,
  specialsData,
} from "./components/Products/data";
import Feature from "./components/Feature/feature.component";
import Footer from "./components/Footer/footer.component";
import Banner from "./components/BannerSections/Banner/banner.component";
import Shop from "./components/BannerSections/Shop/shop.component";
import VideoBanner from "./components/BannerSections/VideoBanner/video.component";
import Gallery from "./components/Gallery/gallery.component";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <ProductCard heading="Choose Your Favorite Drink" data={coffeeData} />
      <Feature />
      <ProductCard
        heading="Enjoy These Wonderful Desserts"
        data={dessertData}
      />
      <Banner />
      <ProductCard
        heading="Good Sandwich For Good Moments"
        data={sandwichData}
      />
      <Shop />
      <ProductCard
        heading="You Never Had Soup So Good So Fast"
        data={soupData}
      />
      <VideoBanner />
      <ProductCard heading="Try Out These Specials" data={specialsData} />
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;
