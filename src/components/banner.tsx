import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

const StyledBannerWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

interface BannerProps {
  content: {
    title: string;
    desc: string;
  };
}

const Banner = ({ content }: BannerProps): JSX.Element => {
  return (
    <StyledBannerWrapper>
      <h1>{content.title}</h1>
      <p>{content.desc}</p>
    </StyledBannerWrapper>
  );
};

export { Banner };
