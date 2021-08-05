import React from 'react';

import './styles/navbar.css';

class Footer extends React.Component{
    render(){
        const element = (
            <div className="Navbar mt">
                <div className="container-fluid center">
                    <span className="fw-light white">Ejercicio de Fronted</span>
                    <span className="fw-bold white">C4E Inc. ©Copyright 2021</span>
                </div>
            </div>
        );
        return element;
    }
}

export default Footer;