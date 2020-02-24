import React from 'react';
import { Link } from 'gatsby';

import { Banner } from '../components/banner';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about-page/">Go to page 2</Link>
    <Banner />
  </Layout>
);

export default IndexPage;
