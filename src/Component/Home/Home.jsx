import React from "react";
import YellowMain from "../YellowMain";
import NavTrack from "../NavTrack";

import Carousel from "../Carousel";
import CoupanSlider from "../CoupanSlider";
import BigSavingZone from "../About/BigSavingZone";
import NewDrop from "../NewDrop/NewDrop";
import Electronics from "../Electronics/Electronics";
import Feature from "../Feature/Feature";
import Footer1 from "../Footer/Footer1";
import Footer from "../Footer/Footer";

const home = () => {
  return (
    <div className="main">
      <Carousel />
      
      <div className="banner m-8 cursor-pointer">
        <img
          src="https://beyoung.in/api/catalog/new-bb/mobile/BB-campaign-section-desktop-view.jpg"
          className=""
          alt=""
        />
      </div>
      <CoupanSlider />
      <BigSavingZone />
      <CoupanSlider />
      <NewDrop />
      <div className="banner m-8 cursor-pointer">
        <img
          src="https://beyoung.in/api/catalog/new-bb/mobile/BB-campaign-section-desktop-view.jpg"
          className=""
          alt=""
        />
      </div>
      

      <Electronics />
      <Feature />
      <Footer1 />
    </div>
  );
};

export default home;
