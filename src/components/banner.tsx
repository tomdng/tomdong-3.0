import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

const StyledBannerWrapper: AnyStyledComponent = styled.div`
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;

  h1 {
    font-size: 72px;
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
      <h1>{content.title}</h1>
      <p>{content.desc}</p>
    </StyledBannerWrapper>
  );
};

export { Banner };
