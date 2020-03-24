import React from 'react';
import { graphql } from 'gatsby';

import { Banner } from '../components/banner';
import { FeaturedProjects } from '../components/featuredProjects';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface BannerInterface {
  frontmatter: {
    title: string;
    desc: string;
    desc2: string;
  };
}

interface QueryProps {
  data: {
    banner: {
      nodes: Array<BannerInterface>;
    };
  };
}

const IndexPage = ({ data }: QueryProps): JSX.Element => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner content={data.banner.nodes[0].frontmatter} />
      <FeaturedProjects />
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
          desc2
        }
      }
    }
  }
`;

export default IndexPage;
