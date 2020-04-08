import React from 'react';

import { Banner } from '../components/banner';
import { FeaturedProjects } from '../components/featuredProjects';
import { OtherProjects } from '../components/otherProjects';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <FeaturedProjects />
      <OtherProjects />
    </Layout>
  );
};

export default IndexPage;
