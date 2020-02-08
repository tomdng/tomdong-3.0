import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const HomePageWrapper: AnyStyledComponent = styled.div`
  background-color: #f0e5e4;
  width: 4000px;
`;

const HomePage: React.FC = (): JSX.Element => {
  return (
    <HomePageWrapper>
      <h1>This is some content</h1>
    </HomePageWrapper>
  );
};

export default HomePage;
