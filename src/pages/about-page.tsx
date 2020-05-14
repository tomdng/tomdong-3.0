import React from 'react';
import { graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { offWhite, textPrimary, textSecondary } from '../settings/index';

const StyledAboutWrapper: AnyStyledComponent = styled.div`
  height: calc(100vh - 4.5rem);
  min-height: 800px;
  background-color: ${offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 72px;
    font-weight: 700;
    margin: 1rem 0;
    color: ${textPrimary};
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const StyledContent: AnyStyledComponent = styled.div`
  max-width: 700px;
  font-size: 18px;

  p {
    margin: 2rem 0;
    color: ${textSecondary};
  }

  @media (max-width: 700px) {
    max-width: 80%;
  }
`;

interface AboutInterface {
  html: HTMLElement;
  frontmatter: {
    title: string;
  };
}

interface AboutQueryProps {
  data: {
    about: {
      nodes: Array<AboutInterface>;
    };
  };
}

const SecondPage = ({ data }: AboutQueryProps): JSX.Element => {
  const content = data.about.nodes[0];

  return (
    <Layout>
      <SEO title="About" />
      <StyledAboutWrapper>
        <h1>{content.frontmatter.title}</h1>
        <StyledContent dangerouslySetInnerHTML={{ __html: content.html }} />
      </StyledAboutWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    about: allMarkdownRemark(filter: { frontmatter: { id: { eq: "about" } } }) {
      nodes {
        html
        frontmatter {
          title
        }
      }
    }
  }
`;

export default SecondPage;
