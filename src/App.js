import React, {Fragment} from 'react';
import Header from './components/header/Header'
import 'materialize-css/dist/css/materialize.min.css';
import  {
          HEADER_TITLE
        } from './resources/Strings';

function App() {
  return (
    <Fragment>
      <Header
        title = {HEADER_TITLE}
      >
      </Header>
    </Fragment>
  )
}

export default App;
