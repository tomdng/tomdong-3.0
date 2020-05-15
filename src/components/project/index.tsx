import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { BigButton } from './bigButton';
import { SmallButton } from './smallButton';
import { Image } from '../image';
import { white, offWhite, textPrimary, textSecondary } from '../../settings';

interface StyleProps {
  featured: boolean;
}

const StyledProject: AnyStyledComponent = styled.div`
  width: ${(props: StyleProps): string => (props.featured ? '80%' : '20rem')};
  margin-bottom: ${(props: StyleProps): string =>
    props.featured ? '6rem' : '4rem'};
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
  overflow: hidden;

  @media (max-width: 768px) {
    width: ${(props: StyleProps): string => (props.featured ? '80%' : '16rem')};
  }

  @media (max-width: 700px) {
    width: ${(props: StyleProps): string =>
      props.featured ? '100%' : '16rem'};
    background: ${(props: StyleProps): string =>
      props.featured ? offWhite : white};
    box-shadow: ${(props: StyleProps): string =>
      props.featured ? 'none' : '0 2px 25px rgba(0, 0, 0, 0.1)'};
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    max-height: 100%;
  }
`;

const StyledProjectContents: AnyStyledComponent = styled.div`
  padding: ${(props: StyleProps): string =>
    props.featured ? '2rem 2rem 2rem 2rem' : '1.5rem 1.5rem 0.5rem 1.5rem'};
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

  @media (max-width: 700px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const StyledDescWrapper: AnyStyledComponent = styled.div`
  margin-bottom: ${(props: StyleProps): string =>
    props.featured ? '4rem' : '0'};

  @media (max-width: 700px) {
    margin-bottom: 1rem;
  }
`;

const StyledImageWrapper: AnyStyledComponent = styled.div`
  width: ${(props: StyleProps): string => (props.featured ? '40rem' : '20rem')};
  height: ${(props: StyleProps): string => (props.featured ? 'auto' : '15rem')};
  max-height: ${(props: StyleProps): string =>
    props.featured ? '28rem' : 'none'};

  @media (max-width: 700px) {
    width: ${(props: StyleProps): string => (props.featured ? '90%' : '100%')};
    height: 15rem;
    max-height: none;
    box-shadow: ${(props: StyleProps): string =>
      props.featured ? '0 2px 25px rgba(0, 0, 0, 0.1)' : 'none'};
    border-radius: ${(props: StyleProps): string =>
      props.featured ? '5px' : '0'};
    overflow: hidden;
  }
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
          <StyledDescWrapper
            featured={featured}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
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
