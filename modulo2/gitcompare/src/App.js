import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';

const Title = styled.h1`
  color: #f00;
  font-size: 32px;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App">
      <Title>Hello World</Title>
    </div>
  </Fragment>
);

export default App;
