import React, { useState, useEffect, useCallback } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'gatsby';
import { offWhite, textPrimary, textSecondary } from '../settings';

interface StyleNavProps {
  visible: boolean;
}
// TODO: Clean up CSS transitions
const StyledNavbar: AnyStyledComponent = styled.header`
  width: 100%;
  height: 5rem;
  background: ${offWhite};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s ease-in-out;
  transform: translateY(
    ${(props: StyleNavProps): number => (props.visible ? 0 : -5)}rem
  );
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
    font-size: 18px;
    margin-left: 2rem;
  }
`;

interface NavbarProps {
  siteTitle: string;
}

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
    <CSSTransition in={visible} timeout={10}>
      <StyledNavbar visible={visible}>
        <StyledNavbarContent>
          <StyledTitle to="/">
            <h1>{siteTitle}</h1>
          </StyledTitle>
          <StyledNavGroup>
            <StyledLink to="/">
              <h1>Projects</h1>
            </StyledLink>
            <StyledLink to="/about-page">
              <h1>About</h1>
            </StyledLink>
          </StyledNavGroup>
        </StyledNavbarContent>
      </StyledNavbar>
    </CSSTransition>
  );
};

export default Navbar;
