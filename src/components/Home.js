import React from "react";
import Banner from "./HomeComponents/Banner";
import Header from "./HomeComponents/Header";
import Feeds from "./HomeComponents/Feeds";
import Footer from "./HomeComponents/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Feeds />
      <Footer />
    </div>
  );
}

export default Home;
