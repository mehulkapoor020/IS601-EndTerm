"use server"
import * as React from "react";
import NavBar from '../../../components/common-components/nav-bar'
import AboutUsSection from "../../../components/about-us/about-us";
import Layout from "../../../components/common-components/layout";

export default async function AboutUs() {
  return (
    <Layout>
      <NavBar />
      <AboutUsSection />
    </Layout>
  )
}
