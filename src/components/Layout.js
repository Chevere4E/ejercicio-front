import React from 'react';

import Navbar from './navbar';
import Footer from './footer';


function Layout(props){
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

export default Layout;
