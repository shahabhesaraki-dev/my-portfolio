import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SectionFive from "../SectionFive";
import SectionFour from "../SectionFour";
import SectionOne from "../SectionOne";
import SectionThree from "../SectionThree";
import SectionTwo from "../SectionTwo";

const Home = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  );
};

export default Home;
