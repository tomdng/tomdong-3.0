import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { Image } from '../image';
import { white, textPrimary, textSecondary } from '../../settings';

interface StyleProps {
  featured: boolean;
}

const StyledProject: AnyStyledComponent = styled.div`
  width: ${(props: StyleProps): string => (props.featured ? '60%' : 'auto')};
  border: solid green;
  margin: 2rem 0;
  background: ${white};
  display: flex;
  flex-direction: ${(props: StyleProps): string =>
    props.featured ? 'row' : 'column'};
  justify-content: ${(props: StyleProps): string =>
    props.featured ? 'space-between' : 'center'};
`;

const StyledProjectContents: AnyStyledComponent = styled.div`
  margin: 1rem;
  max-width: 800px;

  h1 {
    color: ${textPrimary};
    font-size: 36px;
  }

  p {
    color: ${textSecondary};
    font-size: 18px;
  }
`;

const StyledDescWrapper: AnyStyledComponent = styled.div``;

const StyledImageWrapper: AnyStyledComponent = styled.div`
  border: solid blue;
  width: 500px;
`;

interface ProjectProps {
  name: string;
  thumbnail: string;
  featured: boolean;
  altText: string;
  desc: HTMLElement;
}

// TODO: Change styling based on weather or not a project is featured or not
const Project: React.FC<ProjectProps> = (props): JSX.Element => {
  const { name, thumbnail, featured, altText, desc } = props;

  return (
    <StyledProject featured={featured}>
      <StyledProjectContents>
        <h1>{name}</h1>
        <h1>{thumbnail}</h1>
        <StyledDescWrapper dangerouslySetInnerHTML={{ __html: desc }} />
      </StyledProjectContents>
      <StyledImageWrapper>
        <Image thumbnail={thumbnail} />
      </StyledImageWrapper>
    </StyledProject>
  );
};

export { Project };
