import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { BigButton } from './bigButton';
import { Image } from '../image';
import { white, textPrimary, textSecondary } from '../../settings';

interface StyleProps {
  featured: boolean;
}

const StyledProject: AnyStyledComponent = styled.div`
  width: ${(props: StyleProps): string => (props.featured ? '80%' : 'auto')};
  margin: 3rem 0;
  background: ${white};
  border-radius: 5px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: ${(props: StyleProps): string =>
    props.featured ? 'row' : 'column'};
  justify-content: ${(props: StyleProps): string =>
    props.featured ? 'space-between' : 'center'};
  align-items: stretch;
  max-height: 28rem;
`;

const StyledProjectContents: AnyStyledComponent = styled.div`
  padding: 2rem 3rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin: 0;
    color: ${textPrimary};
    font-size: 36px;
  }

  p {
    margin: 1rem 0;
    color: ${textSecondary};
    font-size: 18px;
  }
`;

const StyledDescWrapper: AnyStyledComponent = styled.div``;

const StyledImageWrapper: AnyStyledComponent = styled.div`
  width: 40rem;
  max-height: 28rem;
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
        <div>
          <h1>{name}</h1>
          <StyledDescWrapper dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        <BigButton text="Learn More" />
      </StyledProjectContents>
      <StyledImageWrapper>
        <Image thumbnail={thumbnail} altText={altText} />
      </StyledImageWrapper>
    </StyledProject>
  );
};

export { Project };
