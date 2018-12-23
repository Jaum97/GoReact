import React, { Fragment } from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle>
      <Main />
;
    </GlobalStyle>
  </Fragment>
);

export default App;
