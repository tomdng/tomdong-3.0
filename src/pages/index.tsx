import React from 'react';
import { Link, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Banner } from '../components/banner';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Filler: AnyStyledComponent = styled.div`
  height: 200vh;
`;

interface FrontMatterInterface {
  frontmatter: {
    title: string;
    desc: string;
  };
}

interface QueryProps {
  data: {
    banner: {
      nodes: Array<FrontMatterInterface>;
    };
  };
}

const IndexPage = ({ data }: QueryProps): JSX.Element => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner content={data.banner.nodes[0].frontmatter} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/about-page/">Go to page 2</Link>
      <Filler />
    </Layout>
  );
};

export const query = graphql`
  query {
    banner: allMarkdownRemark(
      filter: { frontmatter: { id: { eq: "home-banner" } } }
    ) {
      nodes {
        frontmatter {
          title
          desc
        }
      }
    }
  }
`;

export default IndexPage;
