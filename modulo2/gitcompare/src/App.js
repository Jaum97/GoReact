import React, { Fragment } from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

/* const Title = styled.h1`
  color: #f00;
  font-size: 32px;
`; */

const App = () => (
  <Fragment>
    <GlobalStyle>
      <Main />
;
    </GlobalStyle>
  </Fragment>
);

export default App;
