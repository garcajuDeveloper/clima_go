import React, {useState} from 'react';
import  {
            CITY_LABEL,
            COUNTRY_LABEL,
            SELECT_OPTION,
            SPAIN_CODE,
            PORTUGAL_CODE,
            FRANCE_CODE,
            ITALY_CODE,
            BELGIUM_CODE,
            UNITED_KINGDOM_CODE,
            NETHERLANDS_CODE,
            GERMANY_CODE,
            SWITZERLAND_CODE,
            CZECH_REPUBLIC_CODE,
            ROMANIA_CODE,
            HUNGARY_CODE,
            GREECE_CODE,
            ICELAND_CODE,
            POLAND_CODE,
            DENMARK_CODE,
            SWEDEN_CODE,
            NORWAY_CODE,
            FINLAND_CODE,
            TURKEY_CODE,
            SPAIN_TEXT,
            PORTUGAL_TEXT,
            FRANCE_TEXT,
            ITALY_TEXT,
            UNITED_KINGDOM_TEXT,
            BELGIUM_TEXT,
            NETHERLANDS_TEXT,
            GERMANY_TEXT,
            POLAND_TEXT,
            SWITZERLAND_TEXT,
            HUNGARY_TEXT,
            ROMANIA_TEXT,
            CZECH_REPUBLIC_TEXT,
            GREECE_TEXT,
            ICELAND_TEXT,
            DENMARK_TEXT,
            SWEDEN_TEXT,
            NORWAY_TEXT,
            FINLAND_TEXT,
            TURKEY_TEXT,
            EMPTY_FIELDS_WARNING,
            SUBMITT_TEXT
        } from '../../resources/Strings'

const Form = ({search, setSearch}) => {
    const [error, setError] = useState(false);

    const { city, country } = search;

    const handleChange = event => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(city.trim() === '' || country.trim() === ''){
            setError(true);
        }else{
            setError(false);
        }    
    }


    return ( 
        <form
            onSubmit = {handleSubmit}
        >
            {(error) ? <p className = "red accent-2 error">{EMPTY_FIELDS_WARNING}</p> : null }
            <div className="input-field col s12">
                <input id="city" type="text" name = "city" value = {city} onChange = {handleChange}/>
                <label htmlFor="city">{CITY_LABEL}</label>
            </div>

            <div className="input-field col s12">
                <select
                    name = "country"
                    id = "country"
                    value = {country}
                    onChange = {handleChange}
                >
                    <option value="">{SELECT_OPTION}</option>
                    <option value={SPAIN_CODE}>{SPAIN_TEXT}</option>
                    <option value={PORTUGAL_CODE}>{PORTUGAL_TEXT}</option>
                    <option value={FRANCE_CODE}>{FRANCE_TEXT}</option>
                    <option value={ITALY_CODE}>{ITALY_TEXT}</option>
                    <option value={UNITED_KINGDOM_CODE}>{UNITED_KINGDOM_TEXT}</option>
                    <option value={BELGIUM_CODE}>{BELGIUM_TEXT}</option>
                    <option value={NETHERLANDS_CODE}>{NETHERLANDS_TEXT}</option>
                    <option value={GERMANY_CODE}>{GERMANY_TEXT}</option>
                    <option value={SWITZERLAND_CODE}>{SWITZERLAND_TEXT}</option>
                    <option value={HUNGARY_CODE}>{HUNGARY_TEXT}</option>
                    <option value={ROMANIA_CODE}>{ROMANIA_TEXT}</option>
                    <option value={CZECH_REPUBLIC_CODE}>{CZECH_REPUBLIC_TEXT}</option>
                    <option value={GREECE_CODE}>{GREECE_TEXT}</option>
                    <option value={ICELAND_CODE}>{ICELAND_TEXT}</option>
                    <option value={DENMARK_CODE}>{DENMARK_TEXT}</option>
                    <option value={POLAND_CODE}>{POLAND_TEXT}</option>
                    <option value={SWEDEN_CODE}>{SWEDEN_TEXT}</option>
                    <option value={NORWAY_CODE}>{NORWAY_TEXT}</option>
                    <option value={FINLAND_CODE}>{FINLAND_TEXT}</option>
                    <option value={TURKEY_CODE}>{TURKEY_TEXT}</option>
                </select>   
                <label htmlFor="country">{COUNTRY_LABEL}</label>
            </div> 
            <div className = "input-field col s12">
                <input type = "submit" value = {SUBMITT_TEXT} className = "waves-effect waves-light btn-block btn-large yellow accent-4"/>
            </div>
        </form>
     );
}
 
export default Form;