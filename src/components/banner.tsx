import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { offWhite } from '../settings';

const StyledBannerWrapper: AnyStyledComponent = styled.div`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${offWhite};
  text-align: center;
`;

const StyledTextWrapper: AnyStyledComponent = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  h1 {
    font-size: 72px;
    font-weight: 700;
    margin: 0;
  }

  p {
    margin: 1rem 0;
    font-size: 18px;
  }
`;

interface BannerProps {
  content: {
    title: string;
    desc: string;
  };
}

const Banner: React.FC<BannerProps> = ({ content }): JSX.Element => {
  return (
    <StyledBannerWrapper>
      <StyledTextWrapper>
        <h1>{content.title}</h1>
        <p>{content.desc}</p>
      </StyledTextWrapper>
    </StyledBannerWrapper>
  );
};

export { Banner };
