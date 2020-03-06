import React, { useState, useEffect, useCallback } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { Link } from 'gatsby';
import { offWhite, textPrimary, textSecondary } from '../settings';

interface StyleNavProps {
  visible: boolean;
}

const StyledNavbar: AnyStyledComponent = styled.header`
  width: 100%;
  height: 5rem;
  background: ${offWhite};
  position: fixed;
  display: ${(props: StyleNavProps): string =>
    props.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
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
    font-size: 28px;
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
// TODO: Navbar still needs CSS tranisition animation
const Navbar: React.FC<NavbarProps> = ({ siteTitle }): JSX.Element => {
  const [curYPos, setCurYPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    if (window.scrollY > curYPos) setVisible(false);
    else setVisible(true);

    setCurYPos(window.scrollY);
  }, [curYPos]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });
    setCurYPos(window.scrollY);
    window.removeEventListener('scroll', () => {
      handleScroll();
    });
  }, [handleScroll]);

  return (
    <StyledNavbar visible={visible}>
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
};

export default Navbar;
