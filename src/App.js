import React, {
                useState,
                useEffect,
                Fragment
              } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import 'materialize-css/dist/css/materialize.min.css';
import  {
          HEADER_TITLE,
          BASE_URL,
          APPID
        } from './resources/Strings';

function App() {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [requestForm, setRequestForm] = useState(false);
  const {city, country } = search;

  useEffect(() => {

    const requestAPI = async () => {
      if(requestForm){
        const url = `${BASE_URL}${city},${country}&appid=${APPID}`;

        const response = await fetch(url);
        const jsonResolved = await response.json();   
        console.log(jsonResolved);
        setRequestForm(false);  
      }
    }
    requestAPI();
  },[requestForm]);

  return (
    <Fragment>
      <Header
        title = {HEADER_TITLE}
      >
      </Header>

      <div className = "container-form">
        <div className = "container">
          <div className = "row">
            <div className = "col m6 s12">
              <Form 
                search = {search}
                setSearch = {setSearch}
                setRequestForm = {setRequestForm}
                />
            </div>
            <div className = "col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
