import React from 'react';

const Header = ({title}) => {
    return ( 
        <nav>
            <div className = "nav-wrapper nav-container">
                <a href="#!" className="nav-container-link">{title}</a>
            </div>
        </nav>
     );
}
 
export default Header;