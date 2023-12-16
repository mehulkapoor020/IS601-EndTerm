"use server"
import * as React from "react";
import NavBar from '../../components/common-components/nav-bar';
import Layout from "../../components/common-components/layout";
import HeroSection from "../../components/home-page/hero-section";
import Menu from "../../components/home-page/menu";
import { getDetails, getMenu, getTestimonials } from '../../lib/utils';
import CTASection from "../../components/home-page/CTA";

export default async function Home() {
  const {content, data} = getDetails('landing_page/landing_page.md');
  const ctaData = getDetails('landing_page/cta.md')

  const menu = getMenu()
  const menuDetails = menu.map((itemName) => {
    const {content, data} = getDetails(`landing_page/menu/${itemName}.md`)
    return {
      name: itemName,
      price: data.price as string,
      image: data.image as string
    }
  });
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
      <Menu menu={menuDetails}/>
    </Layout>
  )
}
