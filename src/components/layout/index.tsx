import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { offWhite } from '../../settings';
import './override-defaults.css';

const StyledSiteWrapper: AnyStyledComponent = styled.div`
  max-width: 100vw;
  background: ${offWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: none;
`;

const StyledMain: AnyStyledComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// TODO: Look into defining styled-component themes here
const Layout: React.FC = ({ children }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledSiteWrapper>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledSiteWrapper>
  );
};

export default Layout;
