import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Project } from '../project';
import { accent, maxContentWidth } from '../../settings';

const StyledOtherProjects: AnyStyledComponent = styled.div`
  width: 100vw;
  max-width: ${maxContentWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -4rem;
`;

const StyledSectionTitle: AnyStyledComponent = styled.div`
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
    font-size: 36px;
  }
`;

const StyledOtherWrapper: AnyStyledComponent = styled.div`
  width: 80%;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
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

const OtherProjects: React.FC = (): JSX.Element => {
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

  const otherProjects = data.projects.nodes.map((element: ProjectElement) => {
    const {
      name,
      id,
      thumbnail,
      link,
      featured,
      altText,
    } = element.frontmatter;
    return featured ? null : (
      <Project
        name={name}
        thumbnail={thumbnail}
        link={link}
        featured={featured}
        altText={altText}
        desc={element.html}
        key={id}
      />
    );
  });

  return (
    <StyledOtherProjects>
      <StyledSectionTitle>Other Projects</StyledSectionTitle>
      <StyledOtherWrapper>{otherProjects}</StyledOtherWrapper>
    </StyledOtherProjects>
  );
};

export { OtherProjects };
