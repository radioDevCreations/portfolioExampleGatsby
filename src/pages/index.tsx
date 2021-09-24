import React, { FC } from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
const IndexPage: FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
      </main>
    </>
  )
}

export default IndexPage
