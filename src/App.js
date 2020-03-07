import React, {
                useState,
                useEffect,
                Fragment
              } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import 'materialize-css/dist/css/materialize.min.css';
import  {
          HEADER_TITLE
        } from './resources/Strings';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const {city, country } = search;

  useEffect(() => {
    console.log(city)
  },[city, country]);

  return (
    <Fragment>
      <Header
        title = {HEADER_TITLE}
      >
      </Header>

      <div className = "container-form">
        <div className = "container">
          <div className = "row">
            <div className = "col m6 s12"><Form search = {search} setSearch = {setSearch}></Form></div>
            <div className = "col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
