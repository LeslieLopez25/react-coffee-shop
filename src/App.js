import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {
  productData,
  productDataTwo,
  productDataThree,
  productDataFour,
  productDataFive
} from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Banner from "./components/BannerSections/Banner";
import Shop from "./components/BannerSections/Shop";
import VideoBanner from "./components/BannerSections/VideoBanner";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose Your Favorite Drink" data={productData} />
      <Feature />
      <Products
        heading="Enjoy These Wonderful Desserts"
        data={productDataTwo}
      />
      <Banner />
      <Products
        heading="Good Sandwich For Good Moments"
        data={productDataThree}
      />
      <Shop />
      <Products
        heading="You Never Had Soup So Good So Fast"
        data={productDataFour}
      />
      <VideoBanner />
      <Products heading="Try Out These Specials" data={productDataFive} />
      <Gallery />
      <Footer />
    </Router>
  );
}

export default App;
