import React from "react";
import Banner from "../Banner/Banner";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";
import NavbarContainer from "../NavbarContainer/NavbarContainer";
import Review from "../Review/Review";
import SecondaryBanner from "../SecondaryBanner/SecondaryBanner";

const Home = () => {
  return (
    <div>
      <NavbarContainer></NavbarContainer>
      <Banner></Banner>
      <SecondaryBanner></SecondaryBanner>
      <FeaturedItems></FeaturedItems>
      <Items></Items>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
