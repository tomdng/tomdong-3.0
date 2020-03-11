import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { offWhite, textPrimary, textSecondary } from '../settings/index';

const StyledAboutWrapper: AnyStyledComponent = styled.div`
  height: 100vh;
  background-color: ${offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 72px;
    font-weight: 700;
    margin: 2rem 0;
    color: ${textPrimary};
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${textSecondary};
  }
`;

const SecondPage = (): JSX.Element => (
  <Layout>
    <SEO title="Page two" />
    <StyledAboutWrapper>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </StyledAboutWrapper>
  </Layout>
);

export default SecondPage;
