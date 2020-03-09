import React from 'react';

const Error = ({message}) => {
    return ( 
        <p className = "red accent-2 error">{message}</p>
     );
}
 
export default Error;