"use client";
import * as React from "react";
import NavBar from '../../components/common-components/nav-bar';
import Layout from "../../components/common-components/layout";
import HeroSection from "../../components/home-page/hero-section";
import { getDetails, getMenu, getTestimonials } from '../../lib/utils';

export default function Home() {
  const {content, data} = getDetails('landing_page/landing_page.md');
  return (
    <Layout>
      <NavBar />
      <HeroSection 
          content={content} 
          bg_url={data.bg_image}
          btn={data.btn}
          sub_heading={data.sub_heading}
      />
    </Layout>
  )
}
