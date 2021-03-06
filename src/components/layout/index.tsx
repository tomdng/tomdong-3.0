import React from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { offWhite } from '../../settings';
import './override-defaults.css';

const StyledSiteWrapper: AnyStyledComponent = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: ${offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const StyledMain: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: Look into defining styled-component themes here
const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <StyledSiteWrapper>
      <Navbar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledSiteWrapper>
  );
};

export default Layout;
