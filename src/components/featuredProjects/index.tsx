import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Project } from '../project';
import { offWhite } from '../../settings';

const StyledFeaturedWrapper: AnyStyledComponent = styled.div`
  border: solid blue;
  background: ${offWhite};
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
            featured
            altText
          }
        }
      }
    }
  `);

  const projects = data.projects.nodes.map((element: any): any => {
    const { name, id, thumbnail, featured, altText } = element.frontmatter;
    return featured ? (
      <Project
        name={name}
        thumbnail={thumbnail}
        featured={featured}
        altText={altText}
        desc={element.html}
        key={id}
      />
    ) : null;
  });

  return <StyledFeaturedWrapper>{projects}</StyledFeaturedWrapper>;
};

export { FeaturedProjects };
