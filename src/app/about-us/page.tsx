"use server"
import * as React from "react";
import NavBar from '../../../components/common-components/nav-bar'
import AboutUsSection from "../../../components/about-us/about-us";
import Layout from "../../../components/common-components/layout";
import Buy1Get1Section from "../../../components/about-us/buy-1-donate-1";

export default async function AboutUs() {
  return (
    <Layout>
      <NavBar />
      <AboutUsSection />
      <Buy1Get1Section />
    </Layout>
  )
}
