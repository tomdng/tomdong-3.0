import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Project } from '../project';
import { offWhite } from '../../settings';

const StyledOtherProjects: AnyStyledComponent = styled.div`
  background: ${offWhite};
  display: flex;
  justify-content: center;
`;

// TODO: Make flexbox behave more like a grid or just use CSS grid
const StyledOtherWrapper: AnyStyledComponent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

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

  // TODO: Add Types
  const otherProjects = data.projects.nodes.map((element: any): any => {
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
      <StyledOtherWrapper>{otherProjects}</StyledOtherWrapper>
    </StyledOtherProjects>
  );
};

export { OtherProjects };
