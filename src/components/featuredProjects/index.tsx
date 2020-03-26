import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Project } from '../project';
import { offWhite } from '../../settings';

const StyledFeaturedSection: AnyStyledComponent = styled.div`
  background: ${offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionTitle: AnyStyledComponent = styled.h1`
  width: 80%;
  font-size: 72px;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const StyledFeaturedWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FeaturedProjects: React.FC = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
      ) {
        nodes {
          html
          frontmatter {
            name
            id
            thumbnail
            link
            featured
            altText
          }
        }
      }
    }
  `);

  // TODO: Add types
  const featuredProjects = data.projects.nodes.map((element: any): any => {
    const {
      name,
      id,
      thumbnail,
      link,
      featured,
      altText,
    } = element.frontmatter;
    return featured ? (
      <Project
        name={name}
        thumbnail={thumbnail}
        link={link}
        featured={featured}
        altText={altText}
        desc={element.html}
        key={id}
      />
    ) : null;
  });

  return (
    <StyledFeaturedSection>
      <StyledSectionTitle>Featured Projects</StyledSectionTitle>
      <StyledFeaturedWrapper>{featuredProjects}</StyledFeaturedWrapper>
    </StyledFeaturedSection>
  );
};

export { FeaturedProjects };
