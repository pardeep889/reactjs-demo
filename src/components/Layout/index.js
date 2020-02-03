import React from "react";
import { Layout } from "antd";
import Header from "./header";
import Footer from "./footer";
import SectionOne from './sections/section1';
import SectionTwo from './sections/section2';
import SectionThree from './sections/section3';
import SectionFour from './sections/section4';
import SectionFive from './sections/section5';
import SectionSix from './sections/section6';
import SectionSeven from './sections/section7';
import SectionE from './sections/section8';
import SectionN from './sections/section9';
const PageLayout = () => {
  return (
    <Layout className="layout">
      <Header />
      <main className="main">
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
          <SectionSix/>
          <SectionSeven/>
          <SectionE/>
          <SectionN/>
      </main>
      <Footer />
    </Layout>
  );
};

export default PageLayout;
