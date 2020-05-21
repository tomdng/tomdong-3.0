import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { accent, textSecondary } from '../settings';

const Styled404Content: AnyStyledComponent = styled.main`
  max-width: 1500px;
  height: 60vh;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 72px;
    font-weight: 700;
    margin: 1.25rem 0;
    color: ${accent};
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${textSecondary};
  }

  @media (max-width: 700px) {
    height: 50vh;
    width: 80%;
    margin-top: 4rem;
    align-items: center;

    h1 {
      font-size: 36px;
      margin: 0.5rem;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }
`;

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled404Content>
      <h1>You seem lost...</h1>
      <p>
        Fortunately, we have a nice navbar and footer here you get you back on
        track!
      </p>
    </Styled404Content>
  </Layout>
);

export default NotFoundPage;
