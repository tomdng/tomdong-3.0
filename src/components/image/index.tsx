import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { AnyStyledComponent } from 'styled-components';

const StyledImage: AnyStyledComponent = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface ImageProps {
  thumbnail: string;
  altText: string;
}

const Image: React.FC<ImageProps> = ({ thumbnail, altText }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/png|jpg|jpeg|gif/" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
          extension
          relativePath
        }
      }
    }
  `);

  const matchImage = data.images.nodes.find(
    (element: { relativePath: string }): boolean => {
      return element.relativePath === thumbnail;
    }
  );

  return matchImage ? (
    <StyledImage fluid={matchImage.childImageSharp.fluid} alt={altText} />
  ) : (
    <h1>No image found!</h1>
  );
};

export { Image };
