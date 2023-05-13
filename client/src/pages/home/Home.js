import React from "react";
import Banner from "../../components/banner";
// import SecondSection from "../../components/SecondSection/SecondSection";
// import BannerBottom from "./BannerBottom";
// import ProgramsSection from "./ProgramsSection";
import Pricing from "./Pricing";
import PreFooter from "../../components/PreFooter/PreFooter";
import TeamInfo from "./TeamInfo";
// import Awarded from "./Awarded";
// import KeyInfoSection from "./KeyInfoSection";
// import BringSales from "./BringSales";
// import CarouselComponent from "./CarouselComponent";
// import Trustedby from "./Trustedby";
import GrowBusiness from "./GrowBusiness";
// import ApexChart from "../../components/RadialBarChart/RadialBarChart";
import Business from "./Business";
import Community from "./Community";
import Corner from "./Corner";
import WhyCrowdShare from "./WhyCrowdShare";
import Hyperlocal from "./Hyperlocal";
import StandarsPlan from "./StandarsPlan";
// import BubbleComponent from "./BubbleComponent";
import BubbleStatic from "./BubbleStatic";
// import AnimateBubble from "./AnimateBubble";
// import SphereGroup from "../../components/SphereGroup/SphereGroup";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Banner />
      {/* <SecondSection /> */}
      {/* <SphereGroup/> */}
      {/* <BubbleComponent /> */}
      <BubbleStatic />
      {/* <AnimateBubble /> */}
      <GrowBusiness />
      <Corner />
      <Business />
      <TeamInfo />
      <Community />

      {/* <ApexChart /> */}
      {/* <Trustedby /> */}
      <WhyCrowdShare />
      <Hyperlocal />
      {/* <KeyInfoSection /> */}
      {/* <BringSales /> */}
      {/* <CarouselComponent /> */}

      <div style={{ height: 80 }}></div>
      <Pricing />
      {/* <Awarded /> */}
      <StandarsPlan />
      {/* <BannerBottom /> */}
      <PreFooter />
    </div>
  );
};

export default Home;
