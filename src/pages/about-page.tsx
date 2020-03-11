import React from 'react';
import { graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { offWhite, textPrimary, textSecondary } from '../settings/index';

// TODO: See if we want to have the footer immediately visible or if we
// want to scroll down to see the footer
const StyledAboutWrapper: AnyStyledComponent = styled.div`
  height: calc(100vh - 200px);
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
`;

const StyledContent: AnyStyledComponent = styled.div`
  max-width: 700px;
  font-size: 18px;

  p {
    margin: 2rem 0;
    color: ${textSecondary};
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
      <SEO title="Page two" />
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
