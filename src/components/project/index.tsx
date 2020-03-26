import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { BigButton } from './bigButton';
import { SmallButton } from './smallButton';
import { Image } from '../image';
import { white, textPrimary, textSecondary } from '../../settings';

interface StyleProps {
  featured: boolean;
}

const StyledProject: AnyStyledComponent = styled.div`
  width: ${(props: StyleProps): string => (props.featured ? '80%' : '20rem')};
  margin: 3rem 0;
  background: ${white};
  border-radius: 5px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: ${(props: StyleProps): string =>
    props.featured ? 'row' : 'column-reverse'};
  justify-content: ${(props: StyleProps): string =>
    props.featured ? 'space-between' : 'flex-end'};
  align-items: ${(props: StyleProps): string =>
    props.featured ? 'stretch' : 'center'};
  max-height: ${(props: StyleProps): string =>
    props.featured ? '28rem' : '100%'};
`;

const StyledProjectContents: AnyStyledComponent = styled.div`
  padding: ${(props: StyleProps): string =>
    props.featured ? '3rem 2rem 2rem 2rem' : '1.5rem 1.5rem 0.5rem 1.5rem'};
  max-width: 800px;
  height: ${(props: StyleProps): string => (props.featured ? 'auto' : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    margin: 0;
    color: ${textPrimary};
    font-size: 36px;
    font-weight: ${(props: StyleProps): string =>
      props.featured ? '700' : '600'};
  }

  p {
    margin: 1rem 0;
    color: ${textSecondary};
    font-size: 18px;
  }
`;

const StyledDescWrapper: AnyStyledComponent = styled.div``;

const StyledImageWrapper: AnyStyledComponent = styled.div`
  width: ${(props: StyleProps): string => (props.featured ? '40rem' : '20rem')};
  height: ${(props: StyleProps): string => (props.featured ? 'auto' : '15rem')};
  max-height: ${(props: StyleProps): string =>
    props.featured ? '28rem' : 'none'};
`;

interface ProjectProps {
  name: string;
  thumbnail: string;
  link: string;
  featured: boolean;
  altText: string;
  desc: HTMLElement;
}

const Project: React.FC<ProjectProps> = (props): JSX.Element => {
  const { name, thumbnail, link, featured, altText, desc } = props;

  return (
    <StyledProject featured={featured}>
      <StyledProjectContents featured={featured}>
        <div>
          <h1>{name}</h1>
          <StyledDescWrapper dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
        {featured ? (
          <BigButton text="Learn More" link={link} />
        ) : (
          <SmallButton text="Learn More" link={link} />
        )}
      </StyledProjectContents>
      <StyledImageWrapper featured={featured}>
        <Image thumbnail={thumbnail} altText={altText} />
      </StyledImageWrapper>
    </StyledProject>
  );
};

export { Project };
