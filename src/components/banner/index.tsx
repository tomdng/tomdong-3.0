import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { textPrimary, textSecondary, maxTextWidth } from '../../settings';

const StyledBannerWrapper: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 60%;
  max-width: ${maxTextWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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

  @media (max-width: 700px) {
    width: 80%;
    height: 60vh;

    h1 {
      font-size: 36px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const Banner: React.FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
  `);

  const [bannerData] = data.allMarkdownRemark.nodes;

  return (
    <StyledBannerWrapper>
      <h1>{bannerData.frontmatter.title}</h1>
      <p>{bannerData.frontmatter.desc}</p>
      <p>{bannerData.frontmatter.desc2}</p>
    </StyledBannerWrapper>
  );
};

export { Banner };
