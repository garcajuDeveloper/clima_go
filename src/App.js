import React, {
                useState,
                useEffect,
                Fragment
              } from 'react';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Weather from './components/weather/Weather';
import Error from './components/error/Error';
import 'materialize-css/dist/css/materialize.min.css';
import  {
          HEADER_TITLE,
          BASE_URL,
          APPID,
          COD_ERROR,
          CITY_NOT_FOUND_ERROR
        } from './resources/Strings';

function App() {

  let conditionalComponent;

  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [requestForm, setRequestForm] = useState(false);
  const [cityResulted, setCityResulted] = useState({});
  const [error, setError] = useState(false);
  

  const {city, country } = search;

  useEffect(() => {

    const requestAPI = async () => {
      if(requestForm){
        const url = `${BASE_URL}${city},${country}&appid=${APPID}`;

        const response = await fetch(url);
        const jsonResolved = await response.json();   
        setCityResulted(jsonResolved);
   
        (jsonResolved.cod === COD_ERROR) ? setError(true) : setError(false);

        setRequestForm(false);
      }
    }
    requestAPI();
  },[requestForm]);

  (error) ? conditionalComponent = <Error message = {CITY_NOT_FOUND_ERROR} /> : 
    conditionalComponent =  <Weather cityResulted = {cityResulted} /> ;

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
            <div className = "col m6 s12">
              {conditionalComponent}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
