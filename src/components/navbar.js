import React from 'react';
import { Link } from 'react-router-dom';

import './styles/navbar.css';

class NavBar extends React.Component{
    render(){
        const element = (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <span className="fw-light">En una galaxia </span>
                        <span className="fw-bold"> muy muy lejana...</span>
                    </Link>
                </div>
            </div>
        );
        return element;
    }
}

export default NavBar;