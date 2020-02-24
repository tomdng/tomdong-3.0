import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const StyledBannerWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Banner = (): JSX.Element => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { eq: "Staring at the sky" } } }
        ) {
          nodes {
            frontmatter {
              title
              desc
            }
          }
        }
      }
    `
  );

  console.log(data.allMarkdownRemark.nodes[0].frontmatter);

  return (
    <StyledBannerWrapper>
      <h1>{data.allMarkdownRemark.nodes[0].frontmatter.title}</h1>
      <p>{data.allMarkdownRemark.nodes[0].frontmatter.desc}</p>
    </StyledBannerWrapper>
  );
};

export { Banner };
