import React, { useState, useEffect, useCallback } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'gatsby';

import { accent, offWhite, textPrimary, textSecondary } from '../../settings';
import MenuIcon from '../../images/menu.svg';
import CloseIcon from '../../images/close-circle.svg';

interface StyleNavProps {
  visible: boolean;
}

const StyledNavbar: AnyStyledComponent = styled.header`
  width: 100%;
  height: 5rem;
  background: ${offWhite};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  transition: 0.2s ease-in-out;
  transform: translateY(
    ${(props: StyleNavProps): number => (props.visible ? 0 : -5)}rem
  );

  @media (max-width: 700px) {
    height: 4rem;
  }
`;

const StyledNavbarContent: AnyStyledComponent = styled.div`
  width: 80%;
  /* Max-width is 80% of max-content width */
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  a:hover {
    color: ${accent};
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

const StyledTitle: AnyStyledComponent = styled(Link)`
  color: ${textPrimary};
  text-decoration: none;

  h1 {
    font-size: 28px;
    font-weight: 600;

    @media (max-width: 700px) {
      font-size: 24px;
    }
  }
`;

const StyledNavGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 700px) {
    display: none;
  }
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

const StyledMobileIcon: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    padding: 0;
    height: 2.5rem;
    width: 2.5rem;
  }

  @media (min-width: 701px) {
    display: none;
  }
`;

const StyledMobileMenu: AnyStyledComponent = styled.div`
  height: calc(100vh - 4rem);
  width: 100vw;
  position: absolute;
  top: 4rem;
  background: ${offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    h1 {
      margin: 2rem 0 2rem 0;
      font-size: 24px;
      font-weight: 600;
    }
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  const [curYPos, setCurYPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > curYPos) {
      setVisible(false);
      setMobileMenu(false);
    } else setVisible(true);

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
            <h1>Tom Dong</h1>
          </StyledTitle>
          <StyledNavGroup>
            <StyledLink to="/#projects">
              <h1>Projects</h1>
            </StyledLink>
            <StyledLink to="/about-page">
              <h1>About</h1>
            </StyledLink>
          </StyledNavGroup>
          <StyledMobileIcon
            onClick={(): void => setMobileMenu(!mobileMenu)}
            open={mobileMenu}
          >
            {mobileMenu ? <CloseIcon /> : <MenuIcon />}
          </StyledMobileIcon>
        </StyledNavbarContent>
        {mobileMenu && visible ? (
          <StyledMobileMenu>
            <StyledLink to="/#projects">
              <h1>Projects</h1>
            </StyledLink>
            <StyledLink to="/about-page">
              <h1>About</h1>
            </StyledLink>
          </StyledMobileMenu>
        ) : null}
      </StyledNavbar>
    </CSSTransition>
  );
};

export { Navbar };
