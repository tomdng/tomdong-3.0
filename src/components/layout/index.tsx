/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { AnyStyledComponent } from 'styled-components';

import Navbar from '../navbar';
import './override-defaults.css';

const StyledSiteWrapper: AnyStyledComponent = styled.div`
  max-width: 100vw;
  overflow-x: none;
  display: flex;
  flex-direction: column;
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
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org"> YEEEEEEET</a>
      </footer>
    </StyledSiteWrapper>
  );
};

export default Layout;
