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

      <div className = "container-form">
        <div className = "container">
          <div className = "row">
            <div className = "col m6 s12">1</div>
            <div className = "col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
