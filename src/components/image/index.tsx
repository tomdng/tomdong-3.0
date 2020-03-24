import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

interface ImageProps {
  thumbnail: string;
}

const Image: React.FC<ImageProps> = ({ thumbnail }): JSX.Element => {
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

  const matchImage = data.images.nodes.find((element: any): any => {
    return element.relativePath === thumbnail;
  });

  return matchImage ? (
    <Img fluid={matchImage.childImageSharp.fluid} />
  ) : (
    <h1>hi</h1>
  );
};

export { Image };
