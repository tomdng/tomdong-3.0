import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { Link } from 'gatsby';
import { offWhite, textPrimary, textSecondary } from '../settings';

const StyledNavbar: AnyStyledComponent = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${offWhite};
`;

const StyledNavbarContent: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 80%;
`;

const StyledTitle: AnyStyledComponent = styled(Link)`
  color: ${textPrimary};
  text-decoration: none;
  h1 {
    font-weight: 600;
  }
`;

const StyledNavGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink: AnyStyledComponent = styled(Link)`
  text-decoration: none;
  color: ${textSecondary};
  h1 {
    font-weight: normal;
    font-size: 24px;
  }
`;

interface NavbarProps {
  siteTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ siteTitle }): JSX.Element => (
  <StyledNavbar>
    <StyledNavbarContent>
      <StyledTitle to="/">
        <h1>{siteTitle}</h1>
      </StyledTitle>
      <StyledNavGroup>
        <StyledLink to="/about-page">
          <h1>About</h1>
        </StyledLink>
      </StyledNavGroup>
    </StyledNavbarContent>
  </StyledNavbar>
);

export default Navbar;
