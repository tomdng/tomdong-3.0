import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { Link } from 'gatsby';

const StyledNavbar: AnyStyledComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

const StyledNavbarContent: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

const StyledLink: AnyStyledComponent = styled(Link)`
  text-decoration: none;
`;

interface NavbarProps {
  siteTitle: string;
}

const Navbar = ({ siteTitle }: NavbarProps): JSX.Element => (
  <StyledNavbar>
    <StyledNavbarContent>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </StyledNavbarContent>
  </StyledNavbar>
);

export default Navbar;
