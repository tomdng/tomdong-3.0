import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Project } from '../project';
import { accent, maxContentWidth } from '../../settings';

const StyledFeaturedSection: AnyStyledComponent = styled.div`
  width: 100vw;
  max-width: ${maxContentWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionTitle: AnyStyledComponent = styled.h1`
  width: 80%;
  color: ${accent};
  font-size: 72px;
  font-weight: 600;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 700px) {
    width: auto;
    margin-left: auto;
    margin-right: auto;
    font-size: 36px;
  }
`;

const StyledFeaturedWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ProjectElement {
  html: HTMLElement;
  frontmatter: {
    name: string;
    id: string;
    thumbnail: string;
    link: string;
    featured: boolean;
    altText: string;
  };
}

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

  const featuredProjects = data.projects.nodes.map(
    (element: ProjectElement) => {
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
    }
  );

  return (
    <StyledFeaturedSection id="projects">
      <StyledSectionTitle>Featured Projects</StyledSectionTitle>
      <StyledFeaturedWrapper>{featuredProjects}</StyledFeaturedWrapper>
    </StyledFeaturedSection>
  );
};

export { FeaturedProjects };
