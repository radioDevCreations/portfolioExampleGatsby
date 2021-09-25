import React, { FC } from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const IndexPage: FC = (props: any) => {
  const { data } = props;
  console.log(data);

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

export const query = graphql`
  {
    allStrapiProject(filter: {featured: {eq: true}}) {
      nodes {
        github
        featured
        description
        id
        url
        slug
        title
        stack {
          id
          title
        }
        image {
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`;

export default IndexPage;
