import React, {Fragment} from 'react';
import logo from "../../images/logo.png";
import manTechnologist from "../../images/man_technologist.png";

const NavBar = ({title, subtitle}) => {
    return (
        <Fragment>
            <header>
                <div className="container">
                    <h1>{title}<br/>
                        <small>{subtitle}</small>
                    </h1>
                    <div id="logos">
                        <img id="logo" src={logo} alt="Logo"/>
                        <img id="manTechnologist" src={manTechnologist} alt="manTechnologist"/>
                    </div>
                </div>
            </header>
            <div id="shadow" className="ss-style-multitriangles"></div>
        </Fragment>
    );
};

export default NavBar;