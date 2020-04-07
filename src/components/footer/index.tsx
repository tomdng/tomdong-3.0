import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import {
  textPrimary,
  textSecondary,
  githubLink,
  instaLink,
  twitterLink,
} from '../../settings';
import GithubIcon from '../../images/github-icon.svg';
import InstagramIcon from '../../images/instagram-icon.svg';
import TwitterIcon from '../../images/twitter.svg';

const StyledFooter: AnyStyledComponent = styled.footer`
  width: 60%;
  max-width: 700px;
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledAuthorText: AnyStyledComponent = styled.h1`
  color: ${textPrimary};
  font-size: 18px;
  font-weight: 600;
`;

const StyledSocialGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSocialLink: AnyStyledComponent = styled.a`
  height: 2.5rem;
  color: ${textSecondary};
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
    margin: 0 0.5rem;
  }

  p {
    font-size: 18px;
  }
`;

const Footer: React.FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledAuthorText>Designed, built by Tom Dong.</StyledAuthorText>
      <StyledSocialGroup>
        <StyledSocialLink href={twitterLink}>
          <TwitterIcon />
          <p>Follow my twitter</p>
        </StyledSocialLink>
        <StyledSocialLink href={githubLink}>
          <GithubIcon />
          <p>Check out my code on Github</p>
        </StyledSocialLink>
        <StyledSocialLink href={instaLink}>
          <InstagramIcon />
          <p>See my photo side on Instagram</p>
        </StyledSocialLink>
      </StyledSocialGroup>
    </StyledFooter>
  );
};

export { Footer };
