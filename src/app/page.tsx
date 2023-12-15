"use client";
import * as React from "react";
import NavBar from '../../components/common-components/nav-bar';
import Layout from "../../components/common-components/layout";
import HeroSection from "../../components/home-page/hero-section";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <HeroSection />
    </Layout>
  )
}
