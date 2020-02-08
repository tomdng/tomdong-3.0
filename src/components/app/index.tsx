import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import HomePage from "../HomePage";

const AppWrapper: AnyStyledComponent = styled.div`
  width: 4000px;
  display: flex;
  flex-direction: row;
`;

const App = (): JSX.Element => {
  return (
    <AppWrapper>
      <h1>Hi you should really check back on this in like 2 weeks.</h1>
      <HomePage />
    </AppWrapper>
  );
};

export default App;
