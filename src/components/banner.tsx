import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { offWhite, textPrimary, textSecondary } from '../settings';

const StyledBannerWrapper: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${offWhite};
  text-align: center;
`;

const StyledTextWrapper: AnyStyledComponent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  h1 {
    font-size: 72px;
    font-weight: 700;
    margin: 2rem 0;
    color: ${textPrimary};
  }

  p {
    font-size: 18px;
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${textSecondary};
  }
`;

interface BannerProps {
  content: {
    title: string;
    desc: string;
    desc2: string;
  };
}

const Banner: React.FC<BannerProps> = ({ content }): JSX.Element => {
  return (
    <StyledBannerWrapper>
      <StyledTextWrapper>
        <h1>{content.title}</h1>
        <p>{content.desc}</p>
        <p>{content.desc2}</p>
      </StyledTextWrapper>
    </StyledBannerWrapper>
  );
};

export { Banner };
