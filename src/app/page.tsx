"use client";
import * as React from "react";
import NavBar from '../../components/common-components/nav-bar';
import Layout from "../../components/common-components/layout";
import HeroSection from "../../components/home-page/hero-section";
import { getDetails, getMenu, getTestimonials } from '../../lib/utils';
import CTASection from "../../components/home-page/CTA";

export default function Home() {
  const {content, data} = getDetails('landing_page/landing_page.md');
  const ctaData = getDetails('landing_page/cta.md')
  return (
    <Layout>
      <NavBar />
      <HeroSection 
          content={content} 
          bg_url={data.bg_image}
          btn={data.btn}
          sub_heading={data.sub_heading}
      />
      <CTASection 
        image={ctaData.data.image}
        btn={ctaData.data.btn}
        heading={ctaData.data.heading}
        content={ctaData.content}
      />
    </Layout>
  )
}
